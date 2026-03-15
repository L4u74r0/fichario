import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { JobHistory } from './entities/job-history.entity';
import { NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JOB_STATUS_FLOW } from './constants/job-status';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,

    @InjectRepository(JobHistory)
    private readonly historyRepository: Repository<JobHistory>,
  ) {}

  // ---------------- CREATE ----------------

  async create(dto: CreateJobDto, userId: number, organizationId: number) {

    const job = this.jobRepository.create({
      title: dto.title,
      description: dto.description,
      organization: { id: organizationId } as any,
      created_by: { id: userId } as any,
    });

    const savedJob = await this.jobRepository.save(job);

    await this.logHistory(
      savedJob,
      'CREATED',
      userId,
      null,
      savedJob.status,
    );

    return savedJob;
  }

  // ---------------- FIND ALL ----------------

  async findAll(organizationId: number): Promise<Job[]> {
    return this.jobRepository.find({
      where: {
        organization: { id: organizationId},
        deleted_at: null,
      },
      relations: {
        created_by: true,
        assigned_to: true,
      },
      order: {
        created_at: 'DESC',
      },
    });
  }

  // ---------------- FIND ONE ----------------

  async findOne(id: number) {

    const job = await this.jobRepository.findOne({
      where: { id },
      relations: {
        organization: true,
        created_by: true,
        assigned_to: true,
      },
    });

    if (!job) {
      throw new NotFoundException("Trabajo número ${id} no encontrado");
    }

    return job;
  }

  // ---------------- UPDATE ----------------

  async update(id: number, updateJobDto: UpdateJobDto, userId: number) {

    const job = await this.jobRepository.findOne({
      where: { id },
      relations: ['assigned_to'],
    });

    if (!job) {
      throw new NotFoundException("Trabajo no encontrado");
    }

    const previousStatus = job.status;

    if (
      updateJobDto.status &&
      updateJobDto.status !== job.status
    ) {
      const allowedTransitions = JOB_STATUS_FLOW[job.status] || [];

      if (!allowedTransitions.includes(updateJobDto.status)) {
        throw new NotFoundException(
          `Transición de estado invalida: ${job.status} → ${updateJobDto.status}`,
        );
      }
      await this.logHistory(
        job,
        'STATUS_CHANGED',
        userId,
        job.status,
        updateJobDto.status,
      );
      job.status = updateJobDto.status;
    }

    if (
      updateJobDto.assigned_to &&
      updateJobDto.assigned_to !== job.assigned_to?.id
    ) {
      job.assigned_to = { id: updateJobDto.assigned_to } as any;
    }

    Object.assign(job, updateJobDto);

    job.updated_by = { id: userId } as any;

    const updatedJob = await this.jobRepository.save(job);

    await this.logHistory(
      updatedJob,
      'UPDATED',
      userId,
      previousStatus,
      updatedJob.status,
    );

    return updatedJob;
  }

  // ---------------- DELETE (SOFT) ----------------

  async deleteJob(id: number, userId: number) {

    const job = await this.jobRepository.findOne({
      where: { id },
    });

    if (!job) {
      throw new NotFoundException("Trabajo no encontrado");
    }

    await this.jobRepository.softRemove(job);

    await this.logHistory(
      job,
      'DELETED',
      userId,
      job.status,
      null,
    );

    return {
      message: `Trabajo ${id} eliminado correctamente (soft delete)`,
    };
  }

  // ---------------- HISTORY LOGGER ----------------

  private async logHistory(
    job: Job,
    action: string,
    userId: number,
    previousStatus?: string,
    newStatus?: string,
  ) {

    const history = this.historyRepository.create({
      job: { id: job.id } as any,
      action,
      previous_status: previousStatus,
      new_status: newStatus,
      changedBy: { id: userId } as any,
    });

    await this.historyRepository.save(history);
  }

  async getDashboard(organizationId: number) {
  const result = await this.jobRepository
    .createQueryBuilder('job')
    .select('job.status', 'status')
    .addSelect('COUNT(job.id)', 'count')
    .where('job.organization_id = :organizationId', { organizationId })
    .andWhere('job.deleted_at IS NULL')
    .groupBy('job.status')
    .getRawMany()
    const dashboard = {
      created: 0,
      assigned: 0,
      in_progress: 0,
      completed: 0,
      delivered: 0,
      };

  result.forEach(row => {
    dashboard[row.status] = Number(row.count);
  });
  return dashboard;
}
}


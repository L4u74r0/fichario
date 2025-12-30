import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { JobHistory } from './entities/job-history.entity';
import { NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';


@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,

    @InjectRepository(JobHistory)
    private readonly historyRepository: Repository<JobHistory>,
  ) {}

  async create(dto: CreateJobDto, userId: number) {
    const job = this.jobRepository.create({
      title: dto.title,
      description: dto.description,
      organization: { id: dto.organization_id } as any,
      created_by: { id: userId } as any,
    });

    const savedJob = await this.jobRepository.save(job);

    await this.historyRepository.save({
      job: savedJob,
      action: 'created',
      field: 'job',
      old_value: null,
      new_value: 'created',
      performed_by: { id: userId } as any,
    });

    return savedJob;
  }

  async findAll(): Promise<Job[]> {
    return this.jobRepository.find({
      relations: {
        organization: true,
        created_by: true,
        assigned_to: true,
        history: {
          performed_by: true,
        },
      },
      order: {
        created_at: 'DESC',
      },
    });
  }

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
      throw new NotFoundException(`Job ${id} no encontrado`);
    }

    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    const job = await this.jobRepository.findOne({
      where: { id },
      relations: ['assigned_to', 'created_by'],
    });

    if (!job) {
      throw new NotFoundException(`Job ${id} no encontrado`);
    }

    if (
      updateJobDto.status &&
      updateJobDto.status !== job.status
    ) {
      await this.historyRepository.save({
        job,
        action: 'updated',
        field: 'status',
        old_value: job.status,
        new_value: updateJobDto.status,
        performed_by: { id: job.created_by.id } as any,
      });

      job.status = updateJobDto.status;
    }

    if (
      updateJobDto.assigned_to &&
      updateJobDto.assigned_to !== job.assigned_to?.id
    ) {
      await this.historyRepository.save({
        job,
        action: 'updated',
        field: 'assigned_to',
        old_value: job.assigned_to?.id?.toString() ?? null,
        new_value: updateJobDto.assigned_to.toString(),
        performed_by: { id: job.created_by.id } as any,
      });

      job.assigned_to = { id: updateJobDto.assigned_to } as any;
    }

    return this.jobRepository.save(job);
  }

  async deleteJob(id: number) {
    const job = await this.jobRepository.findOneBy({ id });

    if (!job) {
      throw new NotFoundException(`Job ${id} no encontrado`);
    }

    return this.jobRepository.delete(id);
  }
}




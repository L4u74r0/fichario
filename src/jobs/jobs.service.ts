import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { JobHistory } from './entities/job-history.entity';
import { CreateJobDto, UpdateJobDto } from './dto/create-job.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,

    @InjectRepository(JobHistory)
    private readonly historyRepository: Repository<JobHistory>,
  ) {}

  async create(dto: CreateJobDto): Promise<Job> {
    const job = this.jobRepository.create({
      title: dto.title,
      description: dto.description,
      status: 'created',
      organization: { id: dto.organization_id },
      created_by: { id: dto.created_by },
    });

    const savedJob = await this.jobRepository.save(job);

    const history = this.historyRepository.create({
      job: savedJob,
      action: 'created',
      new_status: 'created',
      performed_by: { id: dto.created_by },
    });

    await this.historyRepository.save(history);

    return savedJob;
  }

  async findAll() {
    return this.jobRepository.find({
      relations: {
        organization: true,
        created_by: true,
        assigned_to: true,
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
    const job = await this.findOne(id);

    Object.assign(job, updateJobDto);

    return this.jobRepository.save(job);
  }

    async deleteJob(id: number) {
  const job = await this.jobRepository.findOne({
    where: { id },
    relations: ['history'],
  });

  if (!job) {
    throw new NotFoundException('Job no encontrado');
  }

  // 1️⃣ Borrar historial
  await this.historyRepository.delete({
    job: { id },
  });

  // 2️⃣ Borrar job
  await this.jobRepository.delete(id);

  return {
    message: 'Job y su historial eliminados correctamente',
  };
}

}



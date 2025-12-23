import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { JobHistory } from './entities/job-history.entity';
import { CreateJobDto } from './dto/create-job.dto';

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
}


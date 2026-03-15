import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Job } from './entities/job.entity';
import { JobHistory } from './entities/job-history.entity';
import { User } from '../users/entities/users.entity';
import { OrganizationGuard } from 'src/common/guards/organization.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Job,
      JobHistory,
      User,

    ]),
  ],
  controllers: [JobsController],
  providers: [
    JobsService,
    OrganizationGuard,
  ],

  
})
export class JobsModule {}


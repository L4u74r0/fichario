import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Job } from './entities/job.entity';
import { JobHistory } from './entities/job-history.entity';
import { User } from '../users/users.entity'; // 👈 IMPORTANTE

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Job,
      JobHistory,
      User, // 👈 ESTA LÍNEA ARREGLA TODO
    ]),
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}

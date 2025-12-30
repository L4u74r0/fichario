import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Body,
  Delete,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Req } from '@nestjs/common';

@UseGuards(AuthGuard('jwt'))
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(
    @Body() dto: CreateJobDto,
    @Req() req
  ) {
    return this.jobsService.create(dto, req.user.id);
  }


  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jobsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    return this.jobsService.update(+id, updateJobDto);
  }

  @Delete(':id')
  deleteJob(@Param('id') id: number) {
    return this.jobsService.deleteJob(+id);
  }
}

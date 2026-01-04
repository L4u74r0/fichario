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
import { roles } from '../auth/roles.decorator';
import { RolesList } from '../auth/roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @roles(RolesList.ADMIN, RolesList.DESIGNER)
  create(
    @Body() dto: CreateJobDto,
    @Req() req
  ) {
    return this.jobsService.create(dto, req.user.id);
  }

  @roles(RolesList.ADMIN, RolesList.DESIGNER, RolesList.PRODUCTION)
  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @roles(RolesList.ADMIN, RolesList.DESIGNER, RolesList.PRODUCTION)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jobsService.findOne(+id);
  }

  @roles(RolesList.ADMIN, RolesList.DESIGNER)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    return this.jobsService.update(+id, updateJobDto);
  }

  @roles(RolesList.ADMIN)
  @Delete(':id')
  deleteJob(@Param('id') id: number) {
    return this.jobsService.deleteJob(+id);
  }
}


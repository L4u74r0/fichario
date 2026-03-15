import {
    CanActivate,
    ExecutionContext,
    Injectable,
    NotFoundException,
}   from '@nestjs/common';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from 'src/jobs/entities/job.entity';

@Injectable()
export class OrganizationGuard implements CanActivate {
    constructor(
        @InjectRepository(Job)
        private jobRepository: Repository<Job>,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest<Request>();

    const user = request.user as any; // Asegúrate de que el usuario esté en la solicitud
    const jobId = parseInt(request.params.id, 10); // Asegúrate de que el ID sea un número

    if (!jobId) return true; // Si no hay ID, no es una ruta que requiera validación de organización

    const job = await this.jobRepository.findOne({
      where: { id: Number(jobId) },
      relations: ['organization'],
    });

    if (!job) {
      throw new NotFoundException('Trabajo no encontrado');
    }

    if (job.organization.id !== user.organizationId) {
      throw new NotFoundException('No tienes acceso a trabajos de otra organización >:(');
    }

    return true;
    }  
};
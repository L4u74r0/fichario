import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificacionTrabajo } from './notificacion-trabajo.entity';

@Injectable()
export class NotificacionesTrabajosService {
    constructor(
        @InjectRepository(NotificacionTrabajo)
        private notificacionesRepository: Repository<NotificacionTrabajo>
    ) {}

    async findAll(): Promise<NotificacionTrabajo[]> {
        return this.notificacionesRepository.find({
            relations: ['usuario', 'fichaTecnica']
        });
    }

    async findOne(id: number): Promise<NotificacionTrabajo> {
        const notificacion = await this.notificacionesRepository.findOne({
            where: { id },
            relations: ['usuario', 'fichaTecnica']
        });
        if (!notificacion) {
            throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
        }
        return notificacion;
    }

    async create(notificacion: Partial<NotificacionTrabajo>): Promise<NotificacionTrabajo> {
        const nuevaNotificacion = this.notificacionesRepository.create(notificacion);
        return this.notificacionesRepository.save(nuevaNotificacion);
    }

    async marcarComoLeida(id: number): Promise<NotificacionTrabajo> {
        const notificacion = await this.findOne(id);
        notificacion.leido = true;
        notificacion.fecha_lectura = new Date();
        return this.notificacionesRepository.save(notificacion);
    }

    async findByUsuario(usuarioId: number): Promise<NotificacionTrabajo[]> {
        return this.notificacionesRepository
            .createQueryBuilder('notificacion')
            .leftJoinAndSelect('notificacion.usuario', 'usuario')
            .leftJoinAndSelect('notificacion.fichaTecnica', 'fichaTecnica')
            .where('usuario.id = :usuarioId', { usuarioId })
            .getMany();
    }

    async findByFichaTecnica(fichaTecnicaId: number): Promise<NotificacionTrabajo[]> {
        return this.notificacionesRepository
            .createQueryBuilder('notificacion')
            .leftJoinAndSelect('notificacion.usuario', 'usuario')
            .leftJoinAndSelect('notificacion.fichaTecnica', 'fichaTecnica')
            .where('fichaTecnica.id = :fichaTecnicaId', { fichaTecnicaId })
            .getMany();
    }
} 
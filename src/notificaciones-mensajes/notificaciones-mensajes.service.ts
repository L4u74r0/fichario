import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificacionMensaje } from './notificacion-mensaje.entity';

@Injectable()
export class NotificacionesMensajesService {
    constructor(
        @InjectRepository(NotificacionMensaje)
        private notificacionesRepository: Repository<NotificacionMensaje>
    ) {}

    async findAll(): Promise<NotificacionMensaje[]> {
        return this.notificacionesRepository.find({
            relations: ['usuario', 'mensaje']
        });
    }

    async findOne(id: number): Promise<NotificacionMensaje> {
        const notificacion = await this.notificacionesRepository.findOne({
            where: { id },
            relations: ['usuario', 'mensaje']
        });
        if (!notificacion) {
            throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
        }
        return notificacion;
    }

    async create(notificacion: Partial<NotificacionMensaje>): Promise<NotificacionMensaje> {
        const nuevaNotificacion = this.notificacionesRepository.create(notificacion);
        return this.notificacionesRepository.save(nuevaNotificacion);
    }

    async marcarComoLeida(id: number): Promise<NotificacionMensaje> {
        const notificacion = await this.findOne(id);
        notificacion.leido = true;
        notificacion.fecha_lectura = new Date();
        return this.notificacionesRepository.save(notificacion);
    }

    async findByUsuario(usuarioId: number): Promise<NotificacionMensaje[]> {
        return this.notificacionesRepository
            .createQueryBuilder('notificacion')
            .leftJoinAndSelect('notificacion.usuario', 'usuario')
            .leftJoinAndSelect('notificacion.mensaje', 'mensaje')
            .where('usuario.id = :usuarioId', { usuarioId })
            .getMany();
    }

    async findByMensaje(mensajeId: number): Promise<NotificacionMensaje[]> {
        return this.notificacionesRepository
            .createQueryBuilder('notificacion')
            .leftJoinAndSelect('notificacion.usuario', 'usuario')
            .leftJoinAndSelect('notificacion.mensaje', 'mensaje')
            .where('mensaje.id = :mensajeId', { mensajeId })
            .getMany();
    }
} 
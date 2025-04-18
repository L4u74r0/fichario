import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacionTrabajo } from './notificacion-trabajo.entity';
import { NotificacionesTrabajosService } from './notificaciones-trabajos.service';
import { NotificacionesTrabajosController } from './notificaciones-trabajos.controller';

@Module({
    imports: [TypeOrmModule.forFeature([NotificacionTrabajo])],
    providers: [NotificacionesTrabajosService],
    controllers: [NotificacionesTrabajosController],
    exports: [NotificacionesTrabajosService]
})
export class NotificacionesTrabajosModule {} 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacionMensaje } from './notificacion-mensaje.entity';
import { NotificacionesMensajesService } from './notificaciones-mensajes.service';
import { NotificacionesMensajesController } from './notificaciones-mensajes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([NotificacionMensaje])],
    providers: [NotificacionesMensajesService],
    controllers: [NotificacionesMensajesController],
    exports: [NotificacionesMensajesService]
})
export class NotificacionesMensajesModule {} 
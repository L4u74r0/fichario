import { NotificacionesMensajesService } from './notificaciones-mensajes.service';
import { NotificacionMensaje } from './notificacion-mensaje.entity';
export declare class NotificacionesMensajesController {
    private readonly notificacionesService;
    constructor(notificacionesService: NotificacionesMensajesService);
    findAll(): Promise<NotificacionMensaje[]>;
    findByUsuario(usuarioId: number): Promise<NotificacionMensaje[]>;
    findByMensaje(mensajeId: number): Promise<NotificacionMensaje[]>;
    findOne(id: number): Promise<NotificacionMensaje>;
    create(notificacion: Partial<NotificacionMensaje>): Promise<NotificacionMensaje>;
    marcarComoLeida(id: number): Promise<NotificacionMensaje>;
}

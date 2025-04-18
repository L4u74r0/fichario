import { Repository } from 'typeorm';
import { NotificacionMensaje } from './notificacion-mensaje.entity';
export declare class NotificacionesMensajesService {
    private notificacionesRepository;
    constructor(notificacionesRepository: Repository<NotificacionMensaje>);
    findAll(): Promise<NotificacionMensaje[]>;
    findOne(id: number): Promise<NotificacionMensaje>;
    create(notificacion: Partial<NotificacionMensaje>): Promise<NotificacionMensaje>;
    marcarComoLeida(id: number): Promise<NotificacionMensaje>;
    findByUsuario(usuarioId: number): Promise<NotificacionMensaje[]>;
    findByMensaje(mensajeId: number): Promise<NotificacionMensaje[]>;
}

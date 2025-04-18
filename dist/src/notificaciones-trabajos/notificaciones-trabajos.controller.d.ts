import { NotificacionesTrabajosService } from './notificaciones-trabajos.service';
import { NotificacionTrabajo } from './notificacion-trabajo.entity';
export declare class NotificacionesTrabajosController {
    private readonly notificacionesService;
    constructor(notificacionesService: NotificacionesTrabajosService);
    findAll(): Promise<NotificacionTrabajo[]>;
    findByUsuario(usuarioId: number): Promise<NotificacionTrabajo[]>;
    findByFichaTecnica(fichaTecnicaId: number): Promise<NotificacionTrabajo[]>;
    findOne(id: number): Promise<NotificacionTrabajo>;
    create(notificacion: Partial<NotificacionTrabajo>): Promise<NotificacionTrabajo>;
    marcarComoLeida(id: number): Promise<NotificacionTrabajo>;
}

import { Repository } from 'typeorm';
import { NotificacionTrabajo } from './notificacion-trabajo.entity';
export declare class NotificacionesTrabajosService {
    private notificacionesRepository;
    constructor(notificacionesRepository: Repository<NotificacionTrabajo>);
    findAll(): Promise<NotificacionTrabajo[]>;
    findOne(id: number): Promise<NotificacionTrabajo>;
    create(notificacion: Partial<NotificacionTrabajo>): Promise<NotificacionTrabajo>;
    marcarComoLeida(id: number): Promise<NotificacionTrabajo>;
    findByUsuario(usuarioId: number): Promise<NotificacionTrabajo[]>;
    findByFichaTecnica(fichaTecnicaId: number): Promise<NotificacionTrabajo[]>;
}

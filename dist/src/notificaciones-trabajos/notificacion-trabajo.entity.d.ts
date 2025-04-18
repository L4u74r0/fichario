import { Usuario } from '../usuarios/usuario.entity';
export declare class NotificacionTrabajo {
    id: number;
    usuarioId: number;
    usuario: Usuario;
    tipo: string;
    fichaNumero: number;
    usuarioNombre: string;
    fecha: Date;
    leido: boolean;
    fecha_lectura: Date;
}

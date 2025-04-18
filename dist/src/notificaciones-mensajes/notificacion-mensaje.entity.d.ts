import { Usuario } from '../usuarios/usuario.entity';
import { Mensaje } from '../mensajes/mensaje.entity';
export declare class NotificacionMensaje {
    id: number;
    usuarioId: number;
    usuario: Usuario;
    mensajeId: number;
    mensaje: Mensaje;
    fecha: Date;
    leido: boolean;
    fecha_lectura: Date;
}

import { Usuario } from '../usuarios/usuario.entity';
export declare class Mensaje {
    id: number;
    remitenteId: number;
    remitente: Usuario;
    destinatarioId: number;
    destinatario: Usuario;
    mensaje: string;
    fechaEnvio: Date;
    estado: string;
    tipoConsulta: string;
    respondedido: boolean;
    respuesta: string;
    fechaRespuesta: Date;
}

import { MensajesService } from './mensajes.service';
import { Mensaje } from './mensaje.entity';
export declare class MensajesController {
    private readonly mensajesService;
    constructor(mensajesService: MensajesService);
    findAll(): Promise<Mensaje[]>;
    findByRemitente(remitenteId: number): Promise<Mensaje[]>;
    findByDestinatario(destinatarioId: number): Promise<Mensaje[]>;
    findOne(id: number): Promise<Mensaje>;
    create(mensaje: Partial<Mensaje>): Promise<Mensaje>;
    responder(id: number, respuesta: string): Promise<Mensaje>;
    cambiarEstado(id: number, estado: string): Promise<Mensaje>;
}

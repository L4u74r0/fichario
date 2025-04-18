import { Repository } from 'typeorm';
import { Mensaje } from './mensaje.entity';
export declare class MensajesService {
    private mensajesRepository;
    constructor(mensajesRepository: Repository<Mensaje>);
    findAll(): Promise<Mensaje[]>;
    findOne(id: number): Promise<Mensaje>;
    create(mensaje: Partial<Mensaje>): Promise<Mensaje>;
    responder(id: number, respuesta: string): Promise<Mensaje>;
    findByRemitente(remitenteId: number): Promise<Mensaje[]>;
    findByDestinatario(destinatarioId: number): Promise<Mensaje[]>;
    cambiarEstado(id: number, estado: string): Promise<Mensaje>;
}

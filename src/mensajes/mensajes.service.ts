import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from './mensaje.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private mensajesRepository: Repository<Mensaje>
    ) {}

    async findAll(): Promise<Mensaje[]> {
        return this.mensajesRepository.find({
            relations: ['remitente', 'destinatario']
        });
    }

    async findOne(id: number): Promise<Mensaje> {
        const mensaje = await this.mensajesRepository.findOne({
            where: { id },
            relations: ['remitente', 'destinatario']
        });
        if (!mensaje) {
            throw new NotFoundException(`Mensaje con ID ${id} no encontrado`);
        }
        return mensaje;
    }

    async create(mensaje: Partial<Mensaje>): Promise<Mensaje> {
        const nuevoMensaje = this.mensajesRepository.create(mensaje);
        return this.mensajesRepository.save(nuevoMensaje);
    }

    async responder(id: number, respuesta: string): Promise<Mensaje> {
        const mensaje = await this.findOne(id);
        mensaje.respuesta = respuesta;
        mensaje.respondedido = true;
        mensaje.fechaRespuesta = new Date();
        return this.mensajesRepository.save(mensaje);
    }

    async findByRemitente(remitenteId: number): Promise<Mensaje[]> {
        return this.mensajesRepository
            .createQueryBuilder('mensaje')
            .leftJoinAndSelect('mensaje.remitente', 'remitente')
            .leftJoinAndSelect('mensaje.destinatario', 'destinatario')
            .where('remitente.id = :remitenteId', { remitenteId })
            .getMany();
    }

    async findByDestinatario(destinatarioId: number): Promise<Mensaje[]> {
        return this.mensajesRepository
            .createQueryBuilder('mensaje')
            .leftJoinAndSelect('mensaje.remitente', 'remitente')
            .leftJoinAndSelect('mensaje.destinatario', 'destinatario')
            .where('destinatario.id = :destinatarioId', { destinatarioId })
            .getMany();
    }

    async cambiarEstado(id: number, estado: string): Promise<Mensaje> {
        const mensaje = await this.findOne(id);
        mensaje.estado = estado;
        return this.mensajesRepository.save(mensaje);
    }
} 
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FichaTecnica } from './ficha-tecnica.entity';

@Injectable()
export class FichasTecnicasService {
    constructor(
        @InjectRepository(FichaTecnica)
        private fichasTecnicasRepository: Repository<FichaTecnica>
    ) {}

    async findAll(): Promise<FichaTecnica[]> {
        return this.fichasTecnicasRepository.find({
            relations: ['usuario']
        });
    }

    async findOne(id: number): Promise<FichaTecnica> {
        const ficha = await this.fichasTecnicasRepository.findOne({
            where: { id },
            relations: ['usuario']
        });
        if (!ficha) {
            throw new NotFoundException(`Ficha Técnica con ID ${id} no encontrada`);
        }
        return ficha;
    }

    async create(fichaTecnica: Partial<FichaTecnica>): Promise<FichaTecnica> {
        const nuevaFicha = this.fichasTecnicasRepository.create(fichaTecnica);
        nuevaFicha.fecha = new Date();
        return this.fichasTecnicasRepository.save(nuevaFicha);
    }

    async update(id: number, fichaTecnica: Partial<FichaTecnica>): Promise<FichaTecnica> {
        const fichaExistente = await this.findOne(id);
        Object.assign(fichaExistente, fichaTecnica);
        return this.fichasTecnicasRepository.save(fichaExistente);
    }

    async remove(id: number): Promise<void> {
        const ficha = await this.findOne(id);
        await this.fichasTecnicasRepository.remove(ficha);
    }

    async findByUsuario(usuarioId: number): Promise<FichaTecnica[]> {
        return this.fichasTecnicasRepository
            .createQueryBuilder('fichaTecnica')
            .leftJoinAndSelect('fichaTecnica.usuario', 'usuario')
            .where('usuario.id = :usuarioId', { usuarioId })
            .getMany();
    }

    async cambiarEstado(id: number, estado: string): Promise<FichaTecnica> {
        const ficha = await this.findOne(id);
        ficha.estado = estado;
        return this.fichasTecnicasRepository.save(ficha);
    }
} 
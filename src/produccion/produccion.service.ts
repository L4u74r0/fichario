import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produccion } from './produccion.entity';

@Injectable()
export class ProduccionService {
    constructor(
        @InjectRepository(Produccion)
        private produccionRepository: Repository<Produccion>
    ) {}

    async findAll(): Promise<Produccion[]> {
        return this.produccionRepository.find({
            relations: ['fichaTecnica']
        });
    }

    async findOne(id: number): Promise<Produccion> {
        const produccion = await this.produccionRepository.findOne({
            where: { id },
            relations: ['fichaTecnica']
        });
        if (!produccion) {
            throw new NotFoundException(`Producción con ID ${id} no encontrada`);
        }
        return produccion;
    }

    async create(produccion: Partial<Produccion>): Promise<Produccion> {
        const nuevaProduccion = this.produccionRepository.create(produccion);
        return this.produccionRepository.save(nuevaProduccion);
    }

    async update(id: number, produccion: Partial<Produccion>): Promise<Produccion> {
        const produccionExistente = await this.findOne(id);
        Object.assign(produccionExistente, produccion);
        return this.produccionRepository.save(produccionExistente);
    }

    async remove(id: number): Promise<void> {
        const produccion = await this.findOne(id);
        await this.produccionRepository.remove(produccion);
    }

    async findByFichaTecnica(fichaTecnicaId: number): Promise<Produccion[]> {
        return this.produccionRepository
            .createQueryBuilder('produccion')
            .leftJoinAndSelect('produccion.fichaTecnica', 'fichaTecnica')
            .where('fichaTecnica.id = :fichaTecnicaId', { fichaTecnicaId })
            .getMany();
    }

    async actualizarEstado(id: number, estado: string): Promise<Produccion> {
        const produccion = await this.findOne(id);
        produccion.estado = estado;
        return this.produccionRepository.save(produccion);
    }
} 
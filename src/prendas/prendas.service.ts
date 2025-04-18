import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prenda } from './prenda.entity';

@Injectable()
export class PrendasService {
    constructor(
        @InjectRepository(Prenda)
        private prendasRepository: Repository<Prenda>
    ) {}

    async findAll(): Promise<Prenda[]> {
        return this.prendasRepository.find({
            relations: ['fichaTecnica']
        });
    }

    async findOne(id: number): Promise<Prenda> {
        const prenda = await this.prendasRepository.findOne({
            where: { id },
            relations: ['fichaTecnica']
        });
        if (!prenda) {
            throw new NotFoundException(`Prenda con ID ${id} no encontrada`);
        }
        return prenda;
    }

    async create(prenda: Partial<Prenda>): Promise<Prenda> {
        const nuevaPrenda = this.prendasRepository.create(prenda);
        return this.prendasRepository.save(nuevaPrenda);
    }

    async update(id: number, prenda: Partial<Prenda>): Promise<Prenda> {
        const prendaExistente = await this.findOne(id);
        Object.assign(prendaExistente, prenda);
        return this.prendasRepository.save(prendaExistente);
    }

    async remove(id: number): Promise<void> {
        const prenda = await this.findOne(id);
        await this.prendasRepository.remove(prenda);
    }

    async findByFichaTecnica(fichaTecnicaId: number): Promise<Prenda[]> {
        return this.prendasRepository
            .createQueryBuilder('prenda')
            .leftJoinAndSelect('prenda.fichaTecnica', 'fichaTecnica')
            .where('fichaTecnica.id = :fichaTecnicaId', { fichaTecnicaId })
            .getMany();
    }
} 
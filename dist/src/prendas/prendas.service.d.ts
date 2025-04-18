import { Repository } from 'typeorm';
import { Prenda } from './prenda.entity';
export declare class PrendasService {
    private prendasRepository;
    constructor(prendasRepository: Repository<Prenda>);
    findAll(): Promise<Prenda[]>;
    findOne(id: number): Promise<Prenda>;
    create(prenda: Partial<Prenda>): Promise<Prenda>;
    update(id: number, prenda: Partial<Prenda>): Promise<Prenda>;
    remove(id: number): Promise<void>;
    findByFichaTecnica(fichaTecnicaId: number): Promise<Prenda[]>;
}

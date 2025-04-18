import { Repository } from 'typeorm';
import { Produccion } from './produccion.entity';
export declare class ProduccionService {
    private produccionRepository;
    constructor(produccionRepository: Repository<Produccion>);
    findAll(): Promise<Produccion[]>;
    findOne(id: number): Promise<Produccion>;
    create(produccion: Partial<Produccion>): Promise<Produccion>;
    update(id: number, produccion: Partial<Produccion>): Promise<Produccion>;
    remove(id: number): Promise<void>;
    findByFichaTecnica(fichaTecnicaId: number): Promise<Produccion[]>;
    actualizarEstado(id: number, estado: string): Promise<Produccion>;
}

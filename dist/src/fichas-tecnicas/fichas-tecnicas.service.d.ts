import { Repository } from 'typeorm';
import { FichaTecnica } from './ficha-tecnica.entity';
export declare class FichasTecnicasService {
    private fichasTecnicasRepository;
    constructor(fichasTecnicasRepository: Repository<FichaTecnica>);
    findAll(): Promise<FichaTecnica[]>;
    findOne(id: number): Promise<FichaTecnica>;
    create(fichaTecnica: Partial<FichaTecnica>): Promise<FichaTecnica>;
    update(id: number, fichaTecnica: Partial<FichaTecnica>): Promise<FichaTecnica>;
    remove(id: number): Promise<void>;
    findByUsuario(usuarioId: number): Promise<FichaTecnica[]>;
    cambiarEstado(id: number, estado: string): Promise<FichaTecnica>;
}

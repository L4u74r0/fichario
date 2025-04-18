import { FichasTecnicasService } from './fichas-tecnicas.service';
import { FichaTecnica } from './ficha-tecnica.entity';
export declare class FichasTecnicasController {
    private readonly fichasTecnicasService;
    constructor(fichasTecnicasService: FichasTecnicasService);
    findAll(): Promise<FichaTecnica[]>;
    findByUsuario(usuarioId: number): Promise<FichaTecnica[]>;
    findOne(id: number): Promise<FichaTecnica>;
    create(fichaTecnica: Partial<FichaTecnica>): Promise<FichaTecnica>;
    update(id: number, fichaTecnica: Partial<FichaTecnica>): Promise<FichaTecnica>;
    cambiarEstado(id: number, estado: string): Promise<FichaTecnica>;
    remove(id: number): Promise<void>;
}

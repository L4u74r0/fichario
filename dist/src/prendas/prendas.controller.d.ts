import { PrendasService } from './prendas.service';
import { Prenda } from './prenda.entity';
export declare class PrendasController {
    private readonly prendasService;
    constructor(prendasService: PrendasService);
    findAll(): Promise<Prenda[]>;
    findByFichaTecnica(fichaTecnicaId: number): Promise<Prenda[]>;
    findOne(id: number): Promise<Prenda>;
    create(prenda: Partial<Prenda>): Promise<Prenda>;
    update(id: number, prenda: Partial<Prenda>): Promise<Prenda>;
    remove(id: number): Promise<void>;
}

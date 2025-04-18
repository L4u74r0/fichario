import { ProduccionService } from './produccion.service';
import { Produccion } from './produccion.entity';
export declare class ProduccionController {
    private readonly produccionService;
    constructor(produccionService: ProduccionService);
    findAll(): Promise<Produccion[]>;
    findByFichaTecnica(fichaTecnicaId: number): Promise<Produccion[]>;
    findOne(id: number): Promise<Produccion>;
    create(produccion: Partial<Produccion>): Promise<Produccion>;
    update(id: number, produccion: Partial<Produccion>): Promise<Produccion>;
    actualizarEstado(id: number, estado: string): Promise<Produccion>;
    remove(id: number): Promise<void>;
}

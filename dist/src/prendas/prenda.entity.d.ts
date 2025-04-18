import { FichaTecnica } from '../fichas-tecnicas/ficha-tecnica.entity';
export declare class Prenda {
    id: number;
    fichaTecnicaId: number;
    fichaTecnica: FichaTecnica;
    tipo: string;
    cantidad: number;
}

import { FichaTecnica } from '../fichas-tecnicas/ficha-tecnica.entity';
import { Usuario } from '../usuarios/usuario.entity';
export declare class Produccion {
    id: number;
    fichaTecnicaId: number;
    fichaTecnica: FichaTecnica;
    empleadoId: number;
    empleado: Usuario;
    estado: string;
    fechaInicio: Date;
    fechaFin: Date;
    notas: string;
}

import { Usuario } from '../usuarios/usuario.entity';
export declare class FichaTecnica {
    id: number;
    cliente: string;
    archivoPdf: string;
    fecha: Date;
    estado: string;
    usuarioId: number;
    usuario: Usuario;
    createdAt: Date;
}

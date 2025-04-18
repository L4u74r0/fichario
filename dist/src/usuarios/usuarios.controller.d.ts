import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    create(usuario: Partial<Usuario>): Promise<Usuario>;
    update(id: number, usuario: Partial<Usuario>): Promise<Usuario>;
    delete(id: number): Promise<void>;
}

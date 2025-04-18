import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare class UsuariosService {
    private usuariosRepository;
    constructor(usuariosRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario>;
    create(usuario: Partial<Usuario>): Promise<Usuario>;
    update(id: number, usuario: Partial<Usuario>): Promise<Usuario>;
    delete(id: number): Promise<void>;
    validatePassword(email: string, password: string): Promise<boolean>;
}

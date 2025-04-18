import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usuariosRepository: Repository<Usuario>,
    ) {}

    async findAll(): Promise<Usuario[]> {
        return this.usuariosRepository.find({
            select: ['id', 'nombre', 'email', 'rol', 'createdAt'] // Excluimos el password
        });
    }

    async findOne(id: number): Promise<Usuario> {
        const usuario = await this.usuariosRepository.findOne({ 
            where: { id },
            select: ['id', 'nombre', 'email', 'rol', 'createdAt'] // Excluimos el password
        });
        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }

    async findByEmail(email: string): Promise<Usuario> {
        const usuario = await this.usuariosRepository.findOne({ 
            where: { email },
            select: ['id', 'nombre', 'email', 'password', 'rol', 'createdAt'] // Incluimos password para auth
        });
        if (!usuario) {
            throw new NotFoundException(`Usuario con email ${email} no encontrado`);
        }
        return usuario;
    }

    async create(usuario: Partial<Usuario>): Promise<Usuario> {
        // Verificar si el email ya existe
        const existingUser = await this.usuariosRepository.findOne({ 
            where: { email: usuario.email }
        });
        
        if (existingUser) {
            throw new ConflictException('El email ya está registrado');
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(usuario.password, 10);
        
        const nuevoUsuario = this.usuariosRepository.create({
            ...usuario,
            password: hashedPassword
        });

        const savedUser = await this.usuariosRepository.save(nuevoUsuario);
        const { password, ...result } = savedUser;
        return result as Usuario;
    }

    async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
        const usuarioExistente = await this.findOne(id);

        // Si se está actualizando la contraseña, hashearla
        if (usuario.password) {
            usuario.password = await bcrypt.hash(usuario.password, 10);
        }

        await this.usuariosRepository.update(id, usuario);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        const result = await this.usuariosRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
    }

    async validatePassword(email: string, password: string): Promise<boolean> {
        const usuario = await this.usuariosRepository.findOne({ 
            where: { email },
            select: ['password']
        });
        
        if (!usuario) {
            return false;
        }

        return bcrypt.compare(password, usuario.password);
    }
} 
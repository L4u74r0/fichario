import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        try {
            const usuario = await this.usuariosService.findByEmail(email);
            const isPasswordValid = await this.usuariosService.validatePassword(email, password);
            
            if (isPasswordValid) {
                const { password, ...result } = usuario;
                return result;
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id, rol: user.rol };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                nombre: user.nombre,
                rol: user.rol
            }
        };
    }
} 
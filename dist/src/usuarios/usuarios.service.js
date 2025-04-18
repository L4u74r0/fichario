"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const bcrypt = require("bcrypt");
let UsuariosService = class UsuariosService {
    constructor(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }
    async findAll() {
        return this.usuariosRepository.find({
            select: ['id', 'nombre', 'email', 'rol', 'createdAt']
        });
    }
    async findOne(id) {
        const usuario = await this.usuariosRepository.findOne({
            where: { id },
            select: ['id', 'nombre', 'email', 'rol', 'createdAt']
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
    async findByEmail(email) {
        const usuario = await this.usuariosRepository.findOne({
            where: { email },
            select: ['id', 'nombre', 'email', 'password', 'rol', 'createdAt']
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con email ${email} no encontrado`);
        }
        return usuario;
    }
    async create(usuario) {
        const existingUser = await this.usuariosRepository.findOne({
            where: { email: usuario.email }
        });
        if (existingUser) {
            throw new common_1.ConflictException('El email ya está registrado');
        }
        const hashedPassword = await bcrypt.hash(usuario.password, 10);
        const nuevoUsuario = this.usuariosRepository.create({
            ...usuario,
            password: hashedPassword
        });
        const savedUser = await this.usuariosRepository.save(nuevoUsuario);
        const { password, ...result } = savedUser;
        return result;
    }
    async update(id, usuario) {
        const usuarioExistente = await this.findOne(id);
        if (usuario.password) {
            usuario.password = await bcrypt.hash(usuario.password, 10);
        }
        await this.usuariosRepository.update(id, usuario);
        return this.findOne(id);
    }
    async delete(id) {
        const result = await this.usuariosRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
    }
    async validatePassword(email, password) {
        const usuario = await this.usuariosRepository.findOne({
            where: { email },
            select: ['password']
        });
        if (!usuario) {
            return false;
        }
        return bcrypt.compare(password, usuario.password);
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map
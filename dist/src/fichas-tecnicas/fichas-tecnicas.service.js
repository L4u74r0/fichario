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
exports.FichasTecnicasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ficha_tecnica_entity_1 = require("./ficha-tecnica.entity");
let FichasTecnicasService = class FichasTecnicasService {
    constructor(fichasTecnicasRepository) {
        this.fichasTecnicasRepository = fichasTecnicasRepository;
    }
    async findAll() {
        return this.fichasTecnicasRepository.find({
            relations: ['usuario']
        });
    }
    async findOne(id) {
        const ficha = await this.fichasTecnicasRepository.findOne({
            where: { id },
            relations: ['usuario']
        });
        if (!ficha) {
            throw new common_1.NotFoundException(`Ficha Técnica con ID ${id} no encontrada`);
        }
        return ficha;
    }
    async create(fichaTecnica) {
        const nuevaFicha = this.fichasTecnicasRepository.create(fichaTecnica);
        nuevaFicha.fecha = new Date();
        return this.fichasTecnicasRepository.save(nuevaFicha);
    }
    async update(id, fichaTecnica) {
        const fichaExistente = await this.findOne(id);
        Object.assign(fichaExistente, fichaTecnica);
        return this.fichasTecnicasRepository.save(fichaExistente);
    }
    async remove(id) {
        const ficha = await this.findOne(id);
        await this.fichasTecnicasRepository.remove(ficha);
    }
    async findByUsuario(usuarioId) {
        return this.fichasTecnicasRepository
            .createQueryBuilder('fichaTecnica')
            .leftJoinAndSelect('fichaTecnica.usuario', 'usuario')
            .where('usuario.id = :usuarioId', { usuarioId })
            .getMany();
    }
    async cambiarEstado(id, estado) {
        const ficha = await this.findOne(id);
        ficha.estado = estado;
        return this.fichasTecnicasRepository.save(ficha);
    }
};
exports.FichasTecnicasService = FichasTecnicasService;
exports.FichasTecnicasService = FichasTecnicasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ficha_tecnica_entity_1.FichaTecnica)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FichasTecnicasService);
//# sourceMappingURL=fichas-tecnicas.service.js.map
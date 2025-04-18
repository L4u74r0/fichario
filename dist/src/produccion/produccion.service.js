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
exports.ProduccionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produccion_entity_1 = require("./produccion.entity");
let ProduccionService = class ProduccionService {
    constructor(produccionRepository) {
        this.produccionRepository = produccionRepository;
    }
    async findAll() {
        return this.produccionRepository.find({
            relations: ['fichaTecnica']
        });
    }
    async findOne(id) {
        const produccion = await this.produccionRepository.findOne({
            where: { id },
            relations: ['fichaTecnica']
        });
        if (!produccion) {
            throw new common_1.NotFoundException(`Producción con ID ${id} no encontrada`);
        }
        return produccion;
    }
    async create(produccion) {
        const nuevaProduccion = this.produccionRepository.create(produccion);
        return this.produccionRepository.save(nuevaProduccion);
    }
    async update(id, produccion) {
        const produccionExistente = await this.findOne(id);
        Object.assign(produccionExistente, produccion);
        return this.produccionRepository.save(produccionExistente);
    }
    async remove(id) {
        const produccion = await this.findOne(id);
        await this.produccionRepository.remove(produccion);
    }
    async findByFichaTecnica(fichaTecnicaId) {
        return this.produccionRepository
            .createQueryBuilder('produccion')
            .leftJoinAndSelect('produccion.fichaTecnica', 'fichaTecnica')
            .where('fichaTecnica.id = :fichaTecnicaId', { fichaTecnicaId })
            .getMany();
    }
    async actualizarEstado(id, estado) {
        const produccion = await this.findOne(id);
        produccion.estado = estado;
        return this.produccionRepository.save(produccion);
    }
};
exports.ProduccionService = ProduccionService;
exports.ProduccionService = ProduccionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produccion_entity_1.Produccion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProduccionService);
//# sourceMappingURL=produccion.service.js.map
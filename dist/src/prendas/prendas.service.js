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
exports.PrendasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prenda_entity_1 = require("./prenda.entity");
let PrendasService = class PrendasService {
    constructor(prendasRepository) {
        this.prendasRepository = prendasRepository;
    }
    async findAll() {
        return this.prendasRepository.find({
            relations: ['fichaTecnica']
        });
    }
    async findOne(id) {
        const prenda = await this.prendasRepository.findOne({
            where: { id },
            relations: ['fichaTecnica']
        });
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con ID ${id} no encontrada`);
        }
        return prenda;
    }
    async create(prenda) {
        const nuevaPrenda = this.prendasRepository.create(prenda);
        return this.prendasRepository.save(nuevaPrenda);
    }
    async update(id, prenda) {
        const prendaExistente = await this.findOne(id);
        Object.assign(prendaExistente, prenda);
        return this.prendasRepository.save(prendaExistente);
    }
    async remove(id) {
        const prenda = await this.findOne(id);
        await this.prendasRepository.remove(prenda);
    }
    async findByFichaTecnica(fichaTecnicaId) {
        return this.prendasRepository
            .createQueryBuilder('prenda')
            .leftJoinAndSelect('prenda.fichaTecnica', 'fichaTecnica')
            .where('fichaTecnica.id = :fichaTecnicaId', { fichaTecnicaId })
            .getMany();
    }
};
exports.PrendasService = PrendasService;
exports.PrendasService = PrendasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prenda_entity_1.Prenda)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PrendasService);
//# sourceMappingURL=prendas.service.js.map
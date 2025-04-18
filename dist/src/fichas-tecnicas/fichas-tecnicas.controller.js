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
exports.FichasTecnicasController = void 0;
const common_1 = require("@nestjs/common");
const fichas_tecnicas_service_1 = require("./fichas-tecnicas.service");
let FichasTecnicasController = class FichasTecnicasController {
    constructor(fichasTecnicasService) {
        this.fichasTecnicasService = fichasTecnicasService;
    }
    async findAll() {
        return this.fichasTecnicasService.findAll();
    }
    async findByUsuario(usuarioId) {
        return this.fichasTecnicasService.findByUsuario(usuarioId);
    }
    async findOne(id) {
        return this.fichasTecnicasService.findOne(id);
    }
    async create(fichaTecnica) {
        return this.fichasTecnicasService.create(fichaTecnica);
    }
    async update(id, fichaTecnica) {
        return this.fichasTecnicasService.update(id, fichaTecnica);
    }
    async cambiarEstado(id, estado) {
        return this.fichasTecnicasService.cambiarEstado(id, estado);
    }
    async remove(id) {
        return this.fichasTecnicasService.remove(id);
    }
};
exports.FichasTecnicasController = FichasTecnicasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FichasTecnicasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    __param(0, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FichasTecnicasController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FichasTecnicasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FichasTecnicasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FichasTecnicasController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/estado'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], FichasTecnicasController.prototype, "cambiarEstado", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FichasTecnicasController.prototype, "remove", null);
exports.FichasTecnicasController = FichasTecnicasController = __decorate([
    (0, common_1.Controller)('fichas-tecnicas'),
    __metadata("design:paramtypes", [fichas_tecnicas_service_1.FichasTecnicasService])
], FichasTecnicasController);
//# sourceMappingURL=fichas-tecnicas.controller.js.map
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
exports.ProduccionController = void 0;
const common_1 = require("@nestjs/common");
const produccion_service_1 = require("./produccion.service");
let ProduccionController = class ProduccionController {
    constructor(produccionService) {
        this.produccionService = produccionService;
    }
    async findAll() {
        return this.produccionService.findAll();
    }
    async findByFichaTecnica(fichaTecnicaId) {
        return this.produccionService.findByFichaTecnica(fichaTecnicaId);
    }
    async findOne(id) {
        return this.produccionService.findOne(id);
    }
    async create(produccion) {
        return this.produccionService.create(produccion);
    }
    async update(id, produccion) {
        return this.produccionService.update(id, produccion);
    }
    async actualizarEstado(id, estado) {
        return this.produccionService.actualizarEstado(id, estado);
    }
    async remove(id) {
        return this.produccionService.remove(id);
    }
};
exports.ProduccionController = ProduccionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProduccionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('ficha-tecnica/:fichaTecnicaId'),
    __param(0, (0, common_1.Param)('fichaTecnicaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduccionController.prototype, "findByFichaTecnica", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduccionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProduccionController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProduccionController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/estado'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ProduccionController.prototype, "actualizarEstado", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProduccionController.prototype, "remove", null);
exports.ProduccionController = ProduccionController = __decorate([
    (0, common_1.Controller)('produccion'),
    __metadata("design:paramtypes", [produccion_service_1.ProduccionService])
], ProduccionController);
//# sourceMappingURL=produccion.controller.js.map
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
exports.PrendasController = void 0;
const common_1 = require("@nestjs/common");
const prendas_service_1 = require("./prendas.service");
let PrendasController = class PrendasController {
    constructor(prendasService) {
        this.prendasService = prendasService;
    }
    async findAll() {
        return this.prendasService.findAll();
    }
    async findByFichaTecnica(fichaTecnicaId) {
        return this.prendasService.findByFichaTecnica(fichaTecnicaId);
    }
    async findOne(id) {
        return this.prendasService.findOne(id);
    }
    async create(prenda) {
        return this.prendasService.create(prenda);
    }
    async update(id, prenda) {
        return this.prendasService.update(id, prenda);
    }
    async remove(id) {
        return this.prendasService.remove(id);
    }
};
exports.PrendasController = PrendasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrendasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('ficha-tecnica/:fichaTecnicaId'),
    __param(0, (0, common_1.Param)('fichaTecnicaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrendasController.prototype, "findByFichaTecnica", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrendasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PrendasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PrendasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrendasController.prototype, "remove", null);
exports.PrendasController = PrendasController = __decorate([
    (0, common_1.Controller)('prendas'),
    __metadata("design:paramtypes", [prendas_service_1.PrendasService])
], PrendasController);
//# sourceMappingURL=prendas.controller.js.map
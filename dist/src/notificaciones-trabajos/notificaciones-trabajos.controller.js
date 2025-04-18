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
exports.NotificacionesTrabajosController = void 0;
const common_1 = require("@nestjs/common");
const notificaciones_trabajos_service_1 = require("./notificaciones-trabajos.service");
let NotificacionesTrabajosController = class NotificacionesTrabajosController {
    constructor(notificacionesService) {
        this.notificacionesService = notificacionesService;
    }
    async findAll() {
        return this.notificacionesService.findAll();
    }
    async findByUsuario(usuarioId) {
        return this.notificacionesService.findByUsuario(usuarioId);
    }
    async findByFichaTecnica(fichaTecnicaId) {
        return this.notificacionesService.findByFichaTecnica(fichaTecnicaId);
    }
    async findOne(id) {
        return this.notificacionesService.findOne(id);
    }
    async create(notificacion) {
        return this.notificacionesService.create(notificacion);
    }
    async marcarComoLeida(id) {
        return this.notificacionesService.marcarComoLeida(id);
    }
};
exports.NotificacionesTrabajosController = NotificacionesTrabajosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificacionesTrabajosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    __param(0, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesTrabajosController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Get)('ficha-tecnica/:fichaTecnicaId'),
    __param(0, (0, common_1.Param)('fichaTecnicaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesTrabajosController.prototype, "findByFichaTecnica", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesTrabajosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionesTrabajosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id/leer'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesTrabajosController.prototype, "marcarComoLeida", null);
exports.NotificacionesTrabajosController = NotificacionesTrabajosController = __decorate([
    (0, common_1.Controller)('notificaciones-trabajos'),
    __metadata("design:paramtypes", [notificaciones_trabajos_service_1.NotificacionesTrabajosService])
], NotificacionesTrabajosController);
//# sourceMappingURL=notificaciones-trabajos.controller.js.map
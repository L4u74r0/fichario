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
exports.NotificacionesMensajesController = void 0;
const common_1 = require("@nestjs/common");
const notificaciones_mensajes_service_1 = require("./notificaciones-mensajes.service");
let NotificacionesMensajesController = class NotificacionesMensajesController {
    constructor(notificacionesService) {
        this.notificacionesService = notificacionesService;
    }
    async findAll() {
        return this.notificacionesService.findAll();
    }
    async findByUsuario(usuarioId) {
        return this.notificacionesService.findByUsuario(usuarioId);
    }
    async findByMensaje(mensajeId) {
        return this.notificacionesService.findByMensaje(mensajeId);
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
exports.NotificacionesMensajesController = NotificacionesMensajesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificacionesMensajesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    __param(0, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesMensajesController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Get)('mensaje/:mensajeId'),
    __param(0, (0, common_1.Param)('mensajeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesMensajesController.prototype, "findByMensaje", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesMensajesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionesMensajesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id/leer'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificacionesMensajesController.prototype, "marcarComoLeida", null);
exports.NotificacionesMensajesController = NotificacionesMensajesController = __decorate([
    (0, common_1.Controller)('notificaciones-mensajes'),
    __metadata("design:paramtypes", [notificaciones_mensajes_service_1.NotificacionesMensajesService])
], NotificacionesMensajesController);
//# sourceMappingURL=notificaciones-mensajes.controller.js.map
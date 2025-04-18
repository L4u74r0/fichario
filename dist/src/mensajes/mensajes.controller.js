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
exports.MensajesController = void 0;
const common_1 = require("@nestjs/common");
const mensajes_service_1 = require("./mensajes.service");
let MensajesController = class MensajesController {
    constructor(mensajesService) {
        this.mensajesService = mensajesService;
    }
    async findAll() {
        return this.mensajesService.findAll();
    }
    async findByRemitente(remitenteId) {
        return this.mensajesService.findByRemitente(remitenteId);
    }
    async findByDestinatario(destinatarioId) {
        return this.mensajesService.findByDestinatario(destinatarioId);
    }
    async findOne(id) {
        return this.mensajesService.findOne(id);
    }
    async create(mensaje) {
        return this.mensajesService.create(mensaje);
    }
    async responder(id, respuesta) {
        return this.mensajesService.responder(id, respuesta);
    }
    async cambiarEstado(id, estado) {
        return this.mensajesService.cambiarEstado(id, estado);
    }
};
exports.MensajesController = MensajesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MensajesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('remitente/:remitenteId'),
    __param(0, (0, common_1.Param)('remitenteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MensajesController.prototype, "findByRemitente", null);
__decorate([
    (0, common_1.Get)('destinatario/:destinatarioId'),
    __param(0, (0, common_1.Param)('destinatarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MensajesController.prototype, "findByDestinatario", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MensajesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MensajesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id/responder'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('respuesta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], MensajesController.prototype, "responder", null);
__decorate([
    (0, common_1.Put)(':id/estado'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], MensajesController.prototype, "cambiarEstado", null);
exports.MensajesController = MensajesController = __decorate([
    (0, common_1.Controller)('mensajes'),
    __metadata("design:paramtypes", [mensajes_service_1.MensajesService])
], MensajesController);
//# sourceMappingURL=mensajes.controller.js.map
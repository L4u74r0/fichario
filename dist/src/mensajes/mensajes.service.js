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
exports.MensajesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mensaje_entity_1 = require("./mensaje.entity");
let MensajesService = class MensajesService {
    constructor(mensajesRepository) {
        this.mensajesRepository = mensajesRepository;
    }
    async findAll() {
        return this.mensajesRepository.find({
            relations: ['remitente', 'destinatario']
        });
    }
    async findOne(id) {
        const mensaje = await this.mensajesRepository.findOne({
            where: { id },
            relations: ['remitente', 'destinatario']
        });
        if (!mensaje) {
            throw new common_1.NotFoundException(`Mensaje con ID ${id} no encontrado`);
        }
        return mensaje;
    }
    async create(mensaje) {
        const nuevoMensaje = this.mensajesRepository.create(mensaje);
        return this.mensajesRepository.save(nuevoMensaje);
    }
    async responder(id, respuesta) {
        const mensaje = await this.findOne(id);
        mensaje.respuesta = respuesta;
        mensaje.respondedido = true;
        mensaje.fechaRespuesta = new Date();
        return this.mensajesRepository.save(mensaje);
    }
    async findByRemitente(remitenteId) {
        return this.mensajesRepository
            .createQueryBuilder('mensaje')
            .leftJoinAndSelect('mensaje.remitente', 'remitente')
            .leftJoinAndSelect('mensaje.destinatario', 'destinatario')
            .where('remitente.id = :remitenteId', { remitenteId })
            .getMany();
    }
    async findByDestinatario(destinatarioId) {
        return this.mensajesRepository
            .createQueryBuilder('mensaje')
            .leftJoinAndSelect('mensaje.remitente', 'remitente')
            .leftJoinAndSelect('mensaje.destinatario', 'destinatario')
            .where('destinatario.id = :destinatarioId', { destinatarioId })
            .getMany();
    }
    async cambiarEstado(id, estado) {
        const mensaje = await this.findOne(id);
        mensaje.estado = estado;
        return this.mensajesRepository.save(mensaje);
    }
};
exports.MensajesService = MensajesService;
exports.MensajesService = MensajesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mensaje_entity_1.Mensaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MensajesService);
//# sourceMappingURL=mensajes.service.js.map
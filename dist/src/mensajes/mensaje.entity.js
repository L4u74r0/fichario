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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensaje = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let Mensaje = class Mensaje {
};
exports.Mensaje = Mensaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], Mensaje.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'remitente_id', nullable: true }),
    __metadata("design:type", Number)
], Mensaje.prototype, "remitenteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'remitente_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Mensaje.prototype, "remitente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'destinatario_id', nullable: true }),
    __metadata("design:type", Number)
], Mensaje.prototype, "destinatarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'destinatario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Mensaje.prototype, "destinatario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'mensaje',
        type: 'text',
        nullable: false
    }),
    __metadata("design:type", String)
], Mensaje.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'fecha_envio',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Mensaje.prototype, "fechaEnvio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        type: 'character varying',
        length: 50,
        default: 'pendiente'
    }),
    __metadata("design:type", String)
], Mensaje.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'tipo_consulta',
        type: 'character varying',
        length: 50,
        nullable: false
    }),
    __metadata("design:type", String)
], Mensaje.prototype, "tipoConsulta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'respondedido',
        type: 'boolean',
        default: false
    }),
    __metadata("design:type", Boolean)
], Mensaje.prototype, "respondedido", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'respuesta',
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Mensaje.prototype, "respuesta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_respuesta',
        type: 'timestamp without time zone',
        nullable: true
    }),
    __metadata("design:type", Date)
], Mensaje.prototype, "fechaRespuesta", void 0);
exports.Mensaje = Mensaje = __decorate([
    (0, typeorm_1.Entity)('mensajes')
], Mensaje);
//# sourceMappingURL=mensaje.entity.js.map
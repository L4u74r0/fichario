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
exports.NotificacionMensaje = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios/usuario.entity");
const mensaje_entity_1 = require("../mensajes/mensaje.entity");
let NotificacionMensaje = class NotificacionMensaje {
};
exports.NotificacionMensaje = NotificacionMensaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], NotificacionMensaje.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id' }),
    __metadata("design:type", Number)
], NotificacionMensaje.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], NotificacionMensaje.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mensaje_id' }),
    __metadata("design:type", Number)
], NotificacionMensaje.prototype, "mensajeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => mensaje_entity_1.Mensaje),
    (0, typeorm_1.JoinColumn)({ name: 'mensaje_id' }),
    __metadata("design:type", mensaje_entity_1.Mensaje)
], NotificacionMensaje.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'fecha',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], NotificacionMensaje.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'leido',
        type: 'boolean',
        default: false
    }),
    __metadata("design:type", Boolean)
], NotificacionMensaje.prototype, "leido", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_lectura',
        type: 'timestamp without time zone',
        nullable: true
    }),
    __metadata("design:type", Date)
], NotificacionMensaje.prototype, "fecha_lectura", void 0);
exports.NotificacionMensaje = NotificacionMensaje = __decorate([
    (0, typeorm_1.Entity)('notificaciones_mensajes')
], NotificacionMensaje);
//# sourceMappingURL=notificacion-mensaje.entity.js.map
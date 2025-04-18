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
exports.NotificacionTrabajo = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let NotificacionTrabajo = class NotificacionTrabajo {
};
exports.NotificacionTrabajo = NotificacionTrabajo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], NotificacionTrabajo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id' }),
    __metadata("design:type", Number)
], NotificacionTrabajo.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], NotificacionTrabajo.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'tipo',
        type: 'character varying',
        length: 50,
        nullable: false
    }),
    __metadata("design:type", String)
], NotificacionTrabajo.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'ficha_numero',
        type: 'integer',
        nullable: false
    }),
    __metadata("design:type", Number)
], NotificacionTrabajo.prototype, "fichaNumero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'usuario_nombre',
        type: 'character varying',
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], NotificacionTrabajo.prototype, "usuarioNombre", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'fecha',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], NotificacionTrabajo.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'leido',
        type: 'boolean',
        default: false
    }),
    __metadata("design:type", Boolean)
], NotificacionTrabajo.prototype, "leido", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_lectura',
        type: 'timestamp without time zone',
        nullable: true
    }),
    __metadata("design:type", Date)
], NotificacionTrabajo.prototype, "fecha_lectura", void 0);
exports.NotificacionTrabajo = NotificacionTrabajo = __decorate([
    (0, typeorm_1.Entity)('notificaciones_trabajos')
], NotificacionTrabajo);
//# sourceMappingURL=notificacion-trabajo.entity.js.map
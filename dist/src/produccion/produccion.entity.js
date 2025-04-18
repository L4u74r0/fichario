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
exports.Produccion = void 0;
const typeorm_1 = require("typeorm");
const ficha_tecnica_entity_1 = require("../fichas-tecnicas/ficha-tecnica.entity");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let Produccion = class Produccion {
};
exports.Produccion = Produccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], Produccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ficha_tecnica_id' }),
    __metadata("design:type", Number)
], Produccion.prototype, "fichaTecnicaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ficha_tecnica_entity_1.FichaTecnica),
    (0, typeorm_1.JoinColumn)({ name: 'ficha_tecnica_id' }),
    __metadata("design:type", ficha_tecnica_entity_1.FichaTecnica)
], Produccion.prototype, "fichaTecnica", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'empleado_id' }),
    __metadata("design:type", Number)
], Produccion.prototype, "empleadoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'empleado_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Produccion.prototype, "empleado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        type: 'character varying',
        length: 50,
        default: 'esperando'
    }),
    __metadata("design:type", String)
], Produccion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_inicio',
        type: 'timestamp without time zone',
        nullable: true
    }),
    __metadata("design:type", Date)
], Produccion.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_fin',
        type: 'timestamp without time zone',
        nullable: true
    }),
    __metadata("design:type", Date)
], Produccion.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'notas',
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Produccion.prototype, "notas", void 0);
exports.Produccion = Produccion = __decorate([
    (0, typeorm_1.Entity)('produccion')
], Produccion);
//# sourceMappingURL=produccion.entity.js.map
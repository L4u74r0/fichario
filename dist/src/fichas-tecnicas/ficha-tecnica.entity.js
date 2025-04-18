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
exports.FichaTecnica = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let FichaTecnica = class FichaTecnica {
};
exports.FichaTecnica = FichaTecnica;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], FichaTecnica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cliente',
        type: 'character varying',
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], FichaTecnica.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'archivo_pdf',
        type: 'text',
        nullable: false
    }),
    __metadata("design:type", String)
], FichaTecnica.prototype, "archivoPdf", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha',
        type: 'timestamp without time zone',
        nullable: false
    }),
    __metadata("design:type", Date)
], FichaTecnica.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        type: 'character varying',
        length: 50,
        default: 'pendiente'
    }),
    __metadata("design:type", String)
], FichaTecnica.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id' }),
    __metadata("design:type", Number)
], FichaTecnica.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], FichaTecnica.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], FichaTecnica.prototype, "createdAt", void 0);
exports.FichaTecnica = FichaTecnica = __decorate([
    (0, typeorm_1.Entity)('fichas_tecnicas')
], FichaTecnica);
//# sourceMappingURL=ficha-tecnica.entity.js.map
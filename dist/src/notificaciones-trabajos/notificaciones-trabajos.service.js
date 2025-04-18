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
exports.NotificacionesTrabajosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notificacion_trabajo_entity_1 = require("./notificacion-trabajo.entity");
let NotificacionesTrabajosService = class NotificacionesTrabajosService {
    constructor(notificacionesRepository) {
        this.notificacionesRepository = notificacionesRepository;
    }
    async findAll() {
        return this.notificacionesRepository.find({
            relations: ['usuario', 'fichaTecnica']
        });
    }
    async findOne(id) {
        const notificacion = await this.notificacionesRepository.findOne({
            where: { id },
            relations: ['usuario', 'fichaTecnica']
        });
        if (!notificacion) {
            throw new common_1.NotFoundException(`Notificación con ID ${id} no encontrada`);
        }
        return notificacion;
    }
    async create(notificacion) {
        const nuevaNotificacion = this.notificacionesRepository.create(notificacion);
        return this.notificacionesRepository.save(nuevaNotificacion);
    }
    async marcarComoLeida(id) {
        const notificacion = await this.findOne(id);
        notificacion.leido = true;
        notificacion.fecha_lectura = new Date();
        return this.notificacionesRepository.save(notificacion);
    }
    async findByUsuario(usuarioId) {
        return this.notificacionesRepository
            .createQueryBuilder('notificacion')
            .leftJoinAndSelect('notificacion.usuario', 'usuario')
            .leftJoinAndSelect('notificacion.fichaTecnica', 'fichaTecnica')
            .where('usuario.id = :usuarioId', { usuarioId })
            .getMany();
    }
    async findByFichaTecnica(fichaTecnicaId) {
        return this.notificacionesRepository
            .createQueryBuilder('notificacion')
            .leftJoinAndSelect('notificacion.usuario', 'usuario')
            .leftJoinAndSelect('notificacion.fichaTecnica', 'fichaTecnica')
            .where('fichaTecnica.id = :fichaTecnicaId', { fichaTecnicaId })
            .getMany();
    }
};
exports.NotificacionesTrabajosService = NotificacionesTrabajosService;
exports.NotificacionesTrabajosService = NotificacionesTrabajosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notificacion_trabajo_entity_1.NotificacionTrabajo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotificacionesTrabajosService);
//# sourceMappingURL=notificaciones-trabajos.service.js.map
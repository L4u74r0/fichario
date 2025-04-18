"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionesTrabajosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notificacion_trabajo_entity_1 = require("./notificacion-trabajo.entity");
const notificaciones_trabajos_service_1 = require("./notificaciones-trabajos.service");
const notificaciones_trabajos_controller_1 = require("./notificaciones-trabajos.controller");
let NotificacionesTrabajosModule = class NotificacionesTrabajosModule {
};
exports.NotificacionesTrabajosModule = NotificacionesTrabajosModule;
exports.NotificacionesTrabajosModule = NotificacionesTrabajosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notificacion_trabajo_entity_1.NotificacionTrabajo])],
        providers: [notificaciones_trabajos_service_1.NotificacionesTrabajosService],
        controllers: [notificaciones_trabajos_controller_1.NotificacionesTrabajosController],
        exports: [notificaciones_trabajos_service_1.NotificacionesTrabajosService]
    })
], NotificacionesTrabajosModule);
//# sourceMappingURL=notificaciones-trabajos.module.js.map
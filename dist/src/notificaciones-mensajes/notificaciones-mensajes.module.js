"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionesMensajesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notificacion_mensaje_entity_1 = require("./notificacion-mensaje.entity");
const notificaciones_mensajes_service_1 = require("./notificaciones-mensajes.service");
const notificaciones_mensajes_controller_1 = require("./notificaciones-mensajes.controller");
let NotificacionesMensajesModule = class NotificacionesMensajesModule {
};
exports.NotificacionesMensajesModule = NotificacionesMensajesModule;
exports.NotificacionesMensajesModule = NotificacionesMensajesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notificacion_mensaje_entity_1.NotificacionMensaje])],
        providers: [notificaciones_mensajes_service_1.NotificacionesMensajesService],
        controllers: [notificaciones_mensajes_controller_1.NotificacionesMensajesController],
        exports: [notificaciones_mensajes_service_1.NotificacionesMensajesService]
    })
], NotificacionesMensajesModule);
//# sourceMappingURL=notificaciones-mensajes.module.js.map
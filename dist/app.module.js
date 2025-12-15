"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_module_1 = require("./src/usuarios/usuarios.module");
const fichas_tecnicas_module_1 = require("./src/fichas-tecnicas/fichas-tecnicas.module");
const mensajes_module_1 = require("./src/mensajes/mensajes.module");
const notificaciones_mensajes_module_1 = require("./src/notificaciones-mensajes/notificaciones-mensajes.module");
const notificaciones_trabajos_module_1 = require("./src/notificaciones-trabajos/notificaciones-trabajos.module");
const prendas_module_1 = require("./src/prendas/prendas.module");
const produccion_module_1 = require("./src/produccion/produccion.module");
const auth_module_1 = require("./src/auth/auth.module");
const usuario_entity_1 = require("./src/usuarios/usuario.entity");
const ficha_tecnica_entity_1 = require("./src/fichas-tecnicas/ficha-tecnica.entity");
const mensaje_entity_1 = require("./src/mensajes/mensaje.entity");
const notificacion_mensaje_entity_1 = require("./src/notificaciones-mensajes/notificacion-mensaje.entity");
const notificacion_trabajo_entity_1 = require("./src/notificaciones-trabajos/notificacion-trabajo.entity");
const prenda_entity_1 = require("./src/prendas/prenda.entity");
const produccion_entity_1 = require("./src/produccion/produccion.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: 'localhost',
                port: 1433,
                username: 'sa',
                password: 'tu_password',
                database: 'fichario',
                entities: [
                    usuario_entity_1.Usuario,
                    ficha_tecnica_entity_1.FichaTecnica,
                    mensaje_entity_1.Mensaje,
                    notificacion_mensaje_entity_1.NotificacionMensaje,
                    notificacion_trabajo_entity_1.NotificacionTrabajo,
                    prenda_entity_1.Prenda,
                    produccion_entity_1.Produccion
                ],
                synchronize: true,
                options: {
                    encrypt: false,
                    trustServerCertificate: true,
                },
            }),
            auth_module_1.AuthModule,
            usuarios_module_1.UsuariosModule,
            fichas_tecnicas_module_1.FichasTecnicasModule,
            mensajes_module_1.MensajesModule,
            notificaciones_mensajes_module_1.NotificacionesMensajesModule,
            notificaciones_trabajos_module_1.NotificacionesTrabajosModule,
            prendas_module_1.PrendasModule,
            produccion_module_1.ProduccionModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
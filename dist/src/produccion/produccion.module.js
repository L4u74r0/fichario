"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduccionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const produccion_entity_1 = require("./produccion.entity");
const produccion_service_1 = require("./produccion.service");
const produccion_controller_1 = require("./produccion.controller");
let ProduccionModule = class ProduccionModule {
};
exports.ProduccionModule = ProduccionModule;
exports.ProduccionModule = ProduccionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([produccion_entity_1.Produccion])],
        providers: [produccion_service_1.ProduccionService],
        controllers: [produccion_controller_1.ProduccionController],
        exports: [produccion_service_1.ProduccionService]
    })
], ProduccionModule);
//# sourceMappingURL=produccion.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrendasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const prenda_entity_1 = require("./prenda.entity");
const prendas_service_1 = require("./prendas.service");
const prendas_controller_1 = require("./prendas.controller");
let PrendasModule = class PrendasModule {
};
exports.PrendasModule = PrendasModule;
exports.PrendasModule = PrendasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prenda_entity_1.Prenda])],
        providers: [prendas_service_1.PrendasService],
        controllers: [prendas_controller_1.PrendasController],
        exports: [prendas_service_1.PrendasService]
    })
], PrendasModule);
//# sourceMappingURL=prendas.module.js.map
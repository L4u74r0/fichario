"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FichasTecnicasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ficha_tecnica_entity_1 = require("./ficha-tecnica.entity");
const fichas_tecnicas_service_1 = require("./fichas-tecnicas.service");
const fichas_tecnicas_controller_1 = require("./fichas-tecnicas.controller");
let FichasTecnicasModule = class FichasTecnicasModule {
};
exports.FichasTecnicasModule = FichasTecnicasModule;
exports.FichasTecnicasModule = FichasTecnicasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ficha_tecnica_entity_1.FichaTecnica])],
        providers: [fichas_tecnicas_service_1.FichasTecnicasService],
        controllers: [fichas_tecnicas_controller_1.FichasTecnicasController],
        exports: [fichas_tecnicas_service_1.FichasTecnicasService]
    })
], FichasTecnicasModule);
//# sourceMappingURL=fichas-tecnicas.module.js.map
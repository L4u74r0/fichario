import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaTecnica } from './ficha-tecnica.entity';
import { FichasTecnicasService } from './fichas-tecnicas.service';
import { FichasTecnicasController } from './fichas-tecnicas.controller';

@Module({
    imports: [TypeOrmModule.forFeature([FichaTecnica])],
    providers: [FichasTecnicasService],
    controllers: [FichasTecnicasController],
    exports: [FichasTecnicasService]
})
export class FichasTecnicasModule {} 
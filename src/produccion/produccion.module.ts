import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produccion } from './produccion.entity';
import { ProduccionService } from './produccion.service';
import { ProduccionController } from './produccion.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Produccion])],
    providers: [ProduccionService],
    controllers: [ProduccionController],
    exports: [ProduccionService]
})
export class ProduccionModule {} 
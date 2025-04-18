import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './mensaje.entity';
import { MensajesService } from './mensajes.service';
import { MensajesController } from './mensajes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Mensaje])],
    providers: [MensajesService],
    controllers: [MensajesController],
    exports: [MensajesService]
})
export class MensajesModule {} 
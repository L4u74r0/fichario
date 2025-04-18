import { Controller, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { Mensaje } from './mensaje.entity';

@Controller('mensajes')
export class MensajesController {
    constructor(private readonly mensajesService: MensajesService) {}

    @Get()
    async findAll(): Promise<Mensaje[]> {
        return this.mensajesService.findAll();
    }

    @Get('remitente/:remitenteId')
    async findByRemitente(@Param('remitenteId', ParseIntPipe) remitenteId: number): Promise<Mensaje[]> {
        return this.mensajesService.findByRemitente(remitenteId);
    }

    @Get('destinatario/:destinatarioId')
    async findByDestinatario(@Param('destinatarioId', ParseIntPipe) destinatarioId: number): Promise<Mensaje[]> {
        return this.mensajesService.findByDestinatario(destinatarioId);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Mensaje> {
        return this.mensajesService.findOne(id);
    }

    @Post()
    async create(@Body() mensaje: Partial<Mensaje>): Promise<Mensaje> {
        return this.mensajesService.create(mensaje);
    }

    @Put(':id/responder')
    async responder(
        @Param('id', ParseIntPipe) id: number,
        @Body('respuesta') respuesta: string
    ): Promise<Mensaje> {
        return this.mensajesService.responder(id, respuesta);
    }

    @Put(':id/estado')
    async cambiarEstado(
        @Param('id', ParseIntPipe) id: number,
        @Body('estado') estado: string
    ): Promise<Mensaje> {
        return this.mensajesService.cambiarEstado(id, estado);
    }
} 
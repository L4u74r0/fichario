import { Controller, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { NotificacionesMensajesService } from './notificaciones-mensajes.service';
import { NotificacionMensaje } from './notificacion-mensaje.entity';

@Controller('notificaciones-mensajes')
export class NotificacionesMensajesController {
    constructor(private readonly notificacionesService: NotificacionesMensajesService) {}

    @Get()
    async findAll(): Promise<NotificacionMensaje[]> {
        return this.notificacionesService.findAll();
    }

    @Get('usuario/:usuarioId')
    async findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<NotificacionMensaje[]> {
        return this.notificacionesService.findByUsuario(usuarioId);
    }

    @Get('mensaje/:mensajeId')
    async findByMensaje(@Param('mensajeId', ParseIntPipe) mensajeId: number): Promise<NotificacionMensaje[]> {
        return this.notificacionesService.findByMensaje(mensajeId);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<NotificacionMensaje> {
        return this.notificacionesService.findOne(id);
    }

    @Post()
    async create(@Body() notificacion: Partial<NotificacionMensaje>): Promise<NotificacionMensaje> {
        return this.notificacionesService.create(notificacion);
    }

    @Put(':id/leer')
    async marcarComoLeida(@Param('id', ParseIntPipe) id: number): Promise<NotificacionMensaje> {
        return this.notificacionesService.marcarComoLeida(id);
    }
} 
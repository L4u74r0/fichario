import { Controller, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { NotificacionesTrabajosService } from './notificaciones-trabajos.service';
import { NotificacionTrabajo } from './notificacion-trabajo.entity';

@Controller('notificaciones-trabajos')
export class NotificacionesTrabajosController {
    constructor(private readonly notificacionesService: NotificacionesTrabajosService) {}

    @Get()
    async findAll(): Promise<NotificacionTrabajo[]> {
        return this.notificacionesService.findAll();
    }

    @Get('usuario/:usuarioId')
    async findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<NotificacionTrabajo[]> {
        return this.notificacionesService.findByUsuario(usuarioId);
    }

    @Get('ficha-tecnica/:fichaTecnicaId')
    async findByFichaTecnica(@Param('fichaTecnicaId', ParseIntPipe) fichaTecnicaId: number): Promise<NotificacionTrabajo[]> {
        return this.notificacionesService.findByFichaTecnica(fichaTecnicaId);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<NotificacionTrabajo> {
        return this.notificacionesService.findOne(id);
    }

    @Post()
    async create(@Body() notificacion: Partial<NotificacionTrabajo>): Promise<NotificacionTrabajo> {
        return this.notificacionesService.create(notificacion);
    }

    @Put(':id/leer')
    async marcarComoLeida(@Param('id', ParseIntPipe) id: number): Promise<NotificacionTrabajo> {
        return this.notificacionesService.marcarComoLeida(id);
    }
} 
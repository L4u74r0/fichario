import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProduccionService } from './produccion.service';
import { Produccion } from './produccion.entity';

@Controller('produccion')
export class ProduccionController {
    constructor(private readonly produccionService: ProduccionService) {}

    @Get()
    async findAll(): Promise<Produccion[]> {
        return this.produccionService.findAll();
    }

    @Get('ficha-tecnica/:fichaTecnicaId')
    async findByFichaTecnica(@Param('fichaTecnicaId', ParseIntPipe) fichaTecnicaId: number): Promise<Produccion[]> {
        return this.produccionService.findByFichaTecnica(fichaTecnicaId);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Produccion> {
        return this.produccionService.findOne(id);
    }

    @Post()
    async create(@Body() produccion: Partial<Produccion>): Promise<Produccion> {
        return this.produccionService.create(produccion);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() produccion: Partial<Produccion>
    ): Promise<Produccion> {
        return this.produccionService.update(id, produccion);
    }

    @Put(':id/estado')
    async actualizarEstado(
        @Param('id', ParseIntPipe) id: number,
        @Body('estado') estado: string
    ): Promise<Produccion> {
        return this.produccionService.actualizarEstado(id, estado);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.produccionService.remove(id);
    }
} 
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { FichasTecnicasService } from './fichas-tecnicas.service';
import { FichaTecnica } from './ficha-tecnica.entity';

@Controller('fichas-tecnicas')
export class FichasTecnicasController {
    constructor(private readonly fichasTecnicasService: FichasTecnicasService) {}

    @Get()
    async findAll(): Promise<FichaTecnica[]> {
        return this.fichasTecnicasService.findAll();
    }

    @Get('usuario/:usuarioId')
    async findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<FichaTecnica[]> {
        return this.fichasTecnicasService.findByUsuario(usuarioId);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<FichaTecnica> {
        return this.fichasTecnicasService.findOne(id);
    }

    @Post()
    async create(@Body() fichaTecnica: Partial<FichaTecnica>): Promise<FichaTecnica> {
        return this.fichasTecnicasService.create(fichaTecnica);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() fichaTecnica: Partial<FichaTecnica>
    ): Promise<FichaTecnica> {
        return this.fichasTecnicasService.update(id, fichaTecnica);
    }

    @Put(':id/estado')
    async cambiarEstado(
        @Param('id', ParseIntPipe) id: number,
        @Body('estado') estado: string
    ): Promise<FichaTecnica> {
        return this.fichasTecnicasService.cambiarEstado(id, estado);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.fichasTecnicasService.remove(id);
    }
} 
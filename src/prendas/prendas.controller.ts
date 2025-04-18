import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PrendasService } from './prendas.service';
import { Prenda } from './prenda.entity';

@Controller('prendas')
export class PrendasController {
    constructor(private readonly prendasService: PrendasService) {}

    @Get()
    async findAll(): Promise<Prenda[]> {
        return this.prendasService.findAll();
    }

    @Get('ficha-tecnica/:fichaTecnicaId')
    async findByFichaTecnica(@Param('fichaTecnicaId', ParseIntPipe) fichaTecnicaId: number): Promise<Prenda[]> {
        return this.prendasService.findByFichaTecnica(fichaTecnicaId);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Prenda> {
        return this.prendasService.findOne(id);
    }

    @Post()
    async create(@Body() prenda: Partial<Prenda>): Promise<Prenda> {
        return this.prendasService.create(prenda);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() prenda: Partial<Prenda>
    ): Promise<Prenda> {
        return this.prendasService.update(id, prenda);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.prendasService.remove(id);
    }
} 
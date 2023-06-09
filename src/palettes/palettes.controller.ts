import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { CreatePaletteDto } from './dto/create-palette.dto';
import { UpdatePaletteDto } from './dto/update-palette.dto';
import { Palettes } from './entities/palette.entity';

@Controller('palettes')
export class PalettesController {
  constructor(private readonly paletteService: PalettesService) {}

  @Post()
  create(@Body() createPaletteDto: CreatePaletteDto) {
    return this.paletteService.create(createPaletteDto);
  }

  @Get()
  findAll() {
    return this.paletteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paletteService.findOne(id);
  }

  @Patch(':id')
  updatePalettes(@Param('id') id: string, @Body() palettes: Palettes) {
    return this.paletteService.updatePalettes(id, palettes);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paletteService.remove(id);
  }
}

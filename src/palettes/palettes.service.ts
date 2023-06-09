import { Injectable } from '@nestjs/common';
import { CreatePaletteDto } from './dto/create-palette.dto';
import { UpdatePaletteDto } from './dto/update-palette.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Palettes } from './entities/palette.entity';

@Injectable()
export class PalettesService {
  constructor(
    @InjectRepository(Palettes)private palettesRepository: Repository<Palettes>
  ){}


  async create(createPaletteDto: CreatePaletteDto) {
    const palettes = this.palettesRepository.create(createPaletteDto);
    await this.palettesRepository.save(palettes);
    return palettes;
  }

  findAll() {
    return this.palettesRepository.find();
  }

  findOne(id: string) {
    return this.palettesRepository.findOne(
      {
        where: {id}
      }
    );
  }

  async updatePalettes(id: string, palettes: Palettes): Promise<void> {
    await this.palettesRepository.update(id, palettes)
  }

  remove(id: string) {
    this.palettesRepository.delete(id);
    return "Eliminado"
  }
}

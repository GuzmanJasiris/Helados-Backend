import { Module } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { PalettesController } from './palettes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palettes } from './entities/palette.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Palettes])],
  controllers: [PalettesController],
  providers: [PalettesService]
})
export class PalettesModule {}

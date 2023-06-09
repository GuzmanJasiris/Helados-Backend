import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PalettesModule } from './palettes/palettes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'helados',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,

    }),
    PalettesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

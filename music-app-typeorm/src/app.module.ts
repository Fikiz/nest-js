import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';
import { DatabaseModule } from './database/database.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [ArtistModule, DatabaseModule, SongsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

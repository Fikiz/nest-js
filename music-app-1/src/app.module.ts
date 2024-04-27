import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';
import { SongsModule } from './songs/songs.module';
import { SongController } from './songs/songs.controller';
import { SongService } from './songs/songs.service';

@Module({
  imports: [ArtistModule, SongsModule],
  controllers: [AppController, SongController],
  providers: [AppService, SongService],
})
export class AppModule {}

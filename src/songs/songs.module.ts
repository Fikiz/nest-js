import { Module } from '@nestjs/common';
import { SongController } from './songs.controller';
import { SongService } from './songs.service';

@Module({
  controllers: [SongController],
  providers: [SongService]
})
export class SongsModule {}

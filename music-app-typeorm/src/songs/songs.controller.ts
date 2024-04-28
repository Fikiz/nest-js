import { Controller, Param, UsePipes, ValidationPipe, Get,Post,Delete,Put,Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './song.entity';
import { SongCreateDto } from './dtos/song-create.dto';
import { SongUpdateDto } from './dtos/song-update.dto';



@UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )


@Controller('songs')
export class SongsController {
   constructor(private readonly songsService: SongsService) {}

   @Get('/:id')
   getSong(@Param('id') id:string):Promise<Song> {
    return this.songsService.getSong(id)
   }

   @Post('/')
   createSong(@Body() body:SongCreateDto):Promise<Song> {
    return this.songsService.createSong(body)
   }

   @Put('/:id')
   updateSong(
    @Param('id') id:string,
    @Body() body:SongUpdateDto,
   ): Promise<Song>{
    return this.songsService.updateSong(id,body);
   }

   @Delete('/:id')
   deleteSong(@Param('id') id:string): Promise<void> {
    return this.songsService.deleteSong(id);
   }
}

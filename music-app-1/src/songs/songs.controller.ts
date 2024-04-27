// song.controller.ts
import { Controller, Body, Delete, Get, Param, Patch, Post, Put,  } from '@nestjs/common';
import { Song, SongService } from './songs.service';

@Controller('songs')
export class SongController {
    constructor(private readonly songService: SongService) {}

    @Post()
    createSong(@Body() body: Song): Song {
        return this.songService.createSong(body);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Song {
        return this.songService.findOne(Number(id))
    }

    @Patch(':id')
    updateSong(@Body() updateData: any, @Param('id') id: string ){
        return this.songService.updateSong(Number(id), updateData)
    }

    @Delete(':id')
    deleteSong(@Param('id') id: string) {
        return this.songService.deleteSong(Number(id))
    }
}

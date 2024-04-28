import { Injectable } from '@nestjs/common';
import { SongCreateDto } from './dtos/song-create.dto';
import { SongUpdateDto } from './dtos/song-update.dto';
import { Song } from './song.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song) private songRepository: Repository<Song>
    ) {}

// Create
    async createSong(body: SongCreateDto): Promise<Song> {
        const newSong = this.songRepository.create(body);
        return this.songRepository.save(newSong)
    }
// ByID
    async getSong(id:string):Promise<Song> {
        return this.songRepository.findOneByOrFail({id})
    }
    // Update
    async updateSong(id:string, body:SongUpdateDto):Promise<Song> {
        const song = await this.songRepository.findOneByOrFail({id});
        const updateSong = this.songRepository.merge(song,body);
        return this.songRepository.save(updateSong);
    }
    // Delete
    async deleteSong(id:string) {
        await this.songRepository.delete(id);
    }
}

// songs.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';



export interface Song {
    id: number;
    name: string;
    duration: number;
    genre: string;
    releaseDate: string;
}


@Injectable()
export class SongService {
    private songs: Song[] = [
        { id: 1, name: 'Song 1', duration: 180, genre: 'Rock', releaseDate: '2022-01-01' },
        { id: 2, name: 'Song 2', duration: 200, genre: 'Pop', releaseDate: '2022-02-01' },
        { id: 3, name: 'Song 3', duration: 220, genre: 'Hip Hop', releaseDate: '2022-03-01' },
    ];

    findOne(id: number): Song {
        const song = this.songs.find(song => song.id === id);
        return song;
    }

    createSong(songData: Song): Song {
        const song: Song = {
            id: this.songs.length + 1,
            ...songData,
        };
        this.songs.push(song);
        return song;
    }

    
    updateSong(id: number, updateData: any ): Song {
        const index = this.songs.findIndex(song => song.id === id);
        if (index === -1) {
           return null;
        }
        this.songs[index] = { 
            ...this.songs[index], 
            ...updateData 
        };
        return this.songs[index];
    }

    deleteSong(id: number) {
       this.songs = this.songs.filter(song => song.id !== id);
    }

    
}

import { Injectable } from '@nestjs/common';

export interface Artist {
    id:number;
    name: string;
    age: number;
    country: string;
}



@Injectable()
export class ArtistService {
    private artists: Artist[] = [
        {
            id:1,
            name:"Tajzi",
            age:30,
            country:"Macedonia"
        },
        {
            id:2,
            name:"Bonucci",
            age:34,
            country:"Italy"
        },
        {
            id:3,
            name:"Kaliopi",
            age:31,
            country:"Macedonia"
        }
    ];


    getArtist() {
        return this.artists;
    }

    createArtist(artistData: any): Artist {
        const artist: Artist = {
            ...artistData,
            id: this.artists.length + 1,
        };
        this.artists.push(artist);
        return artist; 
    }

    updateArtist(id: number, updateData: any): Artist  {
        const index = this.artists.findIndex(artist => artist.id === id);
        if (index === -1) {
            return null;
        }
        this.artists[index] = {
            ...this.artists[index],
            ...updateData,
        };
        return this.artists[index]; 
    }
    

    deleteArtist(id:number){
        this.artists = this.artists.filter(artist => artist.id !== id);
    }
}



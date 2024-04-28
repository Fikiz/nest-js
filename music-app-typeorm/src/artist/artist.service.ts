import { Injectable } from '@nestjs/common';
import { ArtistCreateDto } from './dtos/artist-create.dto';
import { ArtistUpdateDto } from './dtos/artist-update.dto';
import { ArtistResponseDto } from './dtos/artist-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ArtistService {
    players: ArtistResponseDto[] = [];

    constructor(
        @InjectRepository(Artist) private artistRepository: Repository<Artist>,
    ) {}

// Get All
async getAllArtists(): Promise<Artist[]> {
    return this.artistRepository.find();
  } 
  
// Create Artist
  async createArtist(body: ArtistCreateDto):Promise<Artist> {
    const newArtist = this.artistRepository.create(body);
    return this.artistRepository.save(newArtist)
  }

// Update Artis
  async updateArtist(id:string,body:ArtistUpdateDto):Promise<Artist> {
    const artist = await this.artistRepository.findOneByOrFail({id});
    const updatedArtist = this.artistRepository.merge(artist,body);
    return this.artistRepository.save(updatedArtist)
  }

// Delete Artist
  async deleteArtist(id: string): Promise<void> {
    await this.artistRepository.delete(id)
  }
}

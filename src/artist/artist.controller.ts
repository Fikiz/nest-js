import { Controller, Body, Delete,Get,Param,Patch,Post,Put } from '@nestjs/common';
import { ArtistService, Artist } from './artist.service';


@Controller('artist')
export class ArtistController {
    constructor(private readonly artistService: ArtistService) {}
    
    @Get()
    getArtist():any {
        return this.artistService.getArtist();
    }

    @Post()
    createArtist(@Body() body: any): Artist {
        return this.artistService.createArtist(body);
    }
    
    @Patch(':id')
    updateArtist(@Body() updateData: any, @Param('id') id: string): Artist | null {
        return this.artistService.updateArtist(Number(id), updateData);
    }

    @Delete(':id')
    deleteArtist(@Param('id') id:string){
        return this.artistService.deleteArtist(Number(id));
    }
}

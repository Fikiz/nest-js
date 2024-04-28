import{   
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UsePipes,
    ValidationPipe, 
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistCreateDto } from './dtos/artist-create.dto';
import { ArtistUpdateDto } from './dtos/artist-update.dto';
import { Artist } from './artist.entity';


@UsePipes(
    new ValidationPipe({
        whitelist:true,
        forbidUnknownValues:true,
        transform:true,
    })
)


@Controller('artist')
export class ArtistController {
    constructor(private readonly artistService: ArtistService){}

    @Get('/')
    getArtist():Promise<Artist[]>{
        return this.artistService.getAllArtists();
    }

    @Post('/')
    createArtist(@Body() body:ArtistCreateDto):Promise<Artist> {
        return this.artistService.createArtist(body);
    }

    @Put('/:id')
    updateArtist(@Param('id') id:string,
                 @Body() body:ArtistUpdateDto
     ):Promise<Artist>{
        return this.artistService.updateArtist(id,body)
     }

     @Delete('/:id')
     deleteArtist(@Param('id') id:string):Promise<void> {
        return this.artistService.deleteArtist(id)
     }
}

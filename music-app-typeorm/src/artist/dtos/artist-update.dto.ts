import { IsInt, IsOptional, IsString } from "class-validator";


export class ArtistUpdateDto  {
    @IsString()
    @IsOptional()
    name?: string;

    @IsInt()
    @IsOptional()
    age?: number;

    @IsString()
    @IsOptional()
    country?: string


}
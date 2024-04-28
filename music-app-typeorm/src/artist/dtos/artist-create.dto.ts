import { IsBoolean,IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Transform,Type } from "class-transformer";


export class ArtistCreateDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => value.trim())
    name: string;

    @IsInt()
    age: number;

    @IsString()
    country: string


}
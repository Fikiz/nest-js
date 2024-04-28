import {  IsInt, IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";


export class SongCreateDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => value.trim())
    name: string

    @IsInt()
    @IsNotEmpty()
    duration: number;

    @IsString()
    @IsNotEmpty()
    genre: string;

    @IsString()
    @IsNotEmpty()
    release_date: Date;
}
import {  IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";



export class SongUpdateDto {
    @IsString()
    @IsOptional()
    name?: string

    @IsInt()
    @IsOptional()
    duration?: number;

    @IsString()
    @IsOptional()
    genre?: string;

    @IsString()
    @IsOptional()
    release_date?: Date;
}
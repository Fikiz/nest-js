import { Artist } from "src/artist/artist.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Song {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column()
    duration: number;

    @Column()
    genre: string;

    @Column({type:Date,})
    release_date: Date

    

    
}
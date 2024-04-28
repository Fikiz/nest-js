import { IsString } from "class-validator";
import { Column,Entity,JoinColumn,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { Song } from "src/songs/song.entity";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:String,
    })

    @IsString()
    name: string;

    @Column()
    age:number;

    @Column()
    country:string;

   
}
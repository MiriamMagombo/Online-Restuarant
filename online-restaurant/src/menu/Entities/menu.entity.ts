import {Entity,primaryGenerationColumn, Column} from 'typeorm';

@Entity()
export class Menu {
    @primaryGenerationColumn()
    id!:number;


@Column()
name!:string;

@Column('decimal')
price!:number;

@Column({ nullable: true})
description?: string;

}

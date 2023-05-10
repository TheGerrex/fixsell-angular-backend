import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


// cheatsheet for decorators:
@Entity({name: 'testusers'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({type: 'varchar', length: 255, nullable: true unique: true})
    email: string;
}
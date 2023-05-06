import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


// cheatsheet for decorators:
@Entity({name: 'testusers'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

}
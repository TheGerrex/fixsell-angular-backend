import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'printers'})
export class PrintersEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    category_id: number;

    @Column()
    color: boolean;

    @Column()
    rentable: boolean;

    @Column()
    powerConsumption: string;

    @Column()
    dimensions: string;

    @Column()
    printVelocity: number;

    @Column()
    maxPrintSize: string;

    @Column()
    maxPaperWeight: string;

    @Column()
    duplexUnit: boolean;

    @Column()
    paperSizes: string;


}
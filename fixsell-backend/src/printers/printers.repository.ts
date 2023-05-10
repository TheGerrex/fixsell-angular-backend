import { Entity, EntityRepository, Repository } from "typeorm";
import { PrintersEntity } from "./printers.entity";

@EntityRepository(PrintersEntity)
export class PrintersRepository extends Repository<PrintersEntity>{

} 
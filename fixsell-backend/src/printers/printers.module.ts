import { Module } from '@nestjs/common';
import { PrintersService } from './printers.service';
import { PrintersController } from './printers.controller';
import { type } from 'os';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrintersEntity } from './printers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrintersEntity])],
  providers: [PrintersService],
  controllers: [PrintersController]
})
export class PrintersModule {}

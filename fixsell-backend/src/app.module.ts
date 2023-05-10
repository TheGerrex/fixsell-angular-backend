import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrintersModule } from './printers/printers.module';

@Module({
  imports: [
    
    
    //config module for environment variables
    ConfigModule.forRoot({

      //envFilePath: '.env',
      envFilePath: '.env',
      isGlobal: true,
    }


    ),
    
    
    
    TypeOrmModule.forRootAsync({
    //TODO: 
    //change to IBM2 database connection future
    
    //mysql database connection

    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_DATABASE'),
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    inject: [ConfigService],

    
  }),
    
    
    
    PrintersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

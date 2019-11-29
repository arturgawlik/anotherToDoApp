import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './models/item.model';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ItemService } from './services/item/item.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "mssql",
        host: "localhost",
        port: 1433,
        username: "sa",
        password: "Test123123",
        database: "atdaDB",
        entities: [__dirname + '/**/*.model{.ts,.js}'],
        synchronize: true
      }
    ),
    TypeOrmModule.forFeature([Item])
  ],
  controllers: [AppController],
  providers: [
    ItemService
  ],
})
export class AppModule { }

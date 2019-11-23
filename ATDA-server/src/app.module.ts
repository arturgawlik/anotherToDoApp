import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './models/item.model';


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
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

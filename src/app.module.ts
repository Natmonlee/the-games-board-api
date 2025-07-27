import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { dataSourceOptions } from 'db/datasource';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

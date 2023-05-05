import { Module } from '@nestjs/common';
import { TypeOrmModule, } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeormdata.config';
import { CommentsModule } from './modules/comments/comments.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ItemsModule } from './modules/items/items.module';
import { UsersModule } from './modules/users/users.module';



@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRootAsync({...typeOrmConfigAsync}), CommentsModule, AuthenticationModule, ItemsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
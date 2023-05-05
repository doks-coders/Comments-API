import { TypeOrmModuleOptions, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';


import { Item } from '../modules/items/entities/item.entity';
import { User } from '../modules/users/entities/user.entity';
import { SingleComment } from '../modules/comments/entities/comment.entity';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {

  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      ssl:true,
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Item,User,SingleComment],
     // synchronize: true,
      migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    }
  }
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  ssl:true,
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Item,User,SingleComment],
  autoLoadEntities: true,
  //synchronize:true
}

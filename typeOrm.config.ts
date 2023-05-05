import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Item } from './src/modules/items/entities/item.entity';
import { User } from './src/modules/users/entities/user.entity';
import { SingleComment } from './src/modules/comments/entities/comment.entity';


import { $npmConfigName1682580621064 } from './migrations/1682580621064-$npm_config_name';

config();
 
const configService = new ConfigService();
 
 
export default new DataSource({ 
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [Item,User,SingleComment],
  migrations:[$npmConfigName1682580621064]
});


 
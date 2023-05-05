import { Module } from '@nestjs/common';
import { ItemsController } from './controllers/items.controller';
import { ItemsService } from './services/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Item,User]),UsersModule],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports:[ItemsService]
})
export class ItemsModule {

}



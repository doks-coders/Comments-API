import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingleComment } from './entities/comment.entity';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './services/comments.service';
import { ItemsModule } from '../items/items.module';
import { UsersModule } from '../users/users.module';
import { JWTStrategy } from 'src/strategies/jwt.strategy';
@Module({
    imports:[TypeOrmModule.forFeature([SingleComment]),ItemsModule,UsersModule],
    controllers: [CommentsController],
    providers: [CommentsService,JWTStrategy]
})
export class CommentsModule {

}

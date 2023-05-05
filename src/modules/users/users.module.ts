import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfigAsync } from 'src/config/jwt.config';
import { JWTStrategy } from 'src/strategies/jwt.strategy';

@Module({
  imports:[TypeOrmModule.forFeature([User]),JwtModule.registerAsync(jwtConfigAsync)],
  controllers: [UsersController],
  providers: [UsersService,JWTStrategy],
  exports:[UsersService]
})
export class UsersModule {}

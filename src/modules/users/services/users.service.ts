import { Injectable,HttpStatus,Req } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserDto } from '../dtos/user.dto';
import { JwtService } from '@nestjs/jwt';
import { CustomHttpException } from 'src/utils/global.constants';
import {ERROR, getCustomMessageFromErr} from '../../../utils/strings.constants'
import { LoginUserDto } from '../dtos/login-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,private jwtService:JwtService) { }

    async registerUser(newUser: UserDto ) {
console.log('Initialised')
        let savedUser 
        try {
            const user = new User()
            user.name = newUser.name
            user.email = newUser.email
            user.password = newUser.password
             savedUser = await user.save()
            if(!savedUser) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED,HttpStatus.INTERNAL_SERVER_ERROR)
            return savedUser
        } catch (error) {
           
            throw CustomHttpException(getCustomMessageFromErr(error),HttpStatus.FORBIDDEN)
        }
       
    }

   async getAllUsers():Promise<User []>{
    const users = await this.userRepository.createQueryBuilder('users')
   .getMany()
    return users
   }

    async getUsersById(userId: number): Promise<User> {
        const user = await this.userRepository.createQueryBuilder('user')
        .where('user.id= :userId',{userId})
        .leftJoinAndSelect('user.allcomments', 'comment')
        .leftJoinAndSelect('user.allitems', 'item')
        .getOne();

        if(!user) throw CustomHttpException(ERROR.USER_UNAVAILABLE,HttpStatus.NOT_FOUND)
        return user
    }

    async loginUser(loginInDetails: LoginUserDto) {
        const { password, email } = loginInDetails
        let user = await this.checkifUserWith_email(email)
        if (!user) throw CustomHttpException(ERROR.EMAIL_UNAVAILABLE, HttpStatus.NOT_FOUND)
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) throw CustomHttpException(ERROR.PASSWORD_INCORRECT, HttpStatus.UNAUTHORIZED);
        const userJWT = await this.getJWTFROM_USER(user)
        return userJWT
    }

    async checkifUserWith_email(email){
        let user = await this.userRepository.createQueryBuilder('user').addSelect('user.password').where('user.email = :email',{email}).getOne()
        if (!user) throw CustomHttpException(ERROR.EMAIL_UNAVAILABLE, HttpStatus.NOT_FOUND)
        return user
    }


    async getJWTFROM_USER(user: User): Promise<string> {
        const { email, name, password } = user
        const jwtEmailString = await this.jwtService.signAsync({ email, name, password })
        return jwtEmailString
    }


    async generateToken(user: User) {
        const  access_token = await this.jwtService.sign({
             name: user.name,
             email: user.email
         })
             return {
                 access_token
             }
         }

         async getUserIDFromEmail(email:string):Promise<number>{
            const user = await this.userRepository.findOne({where:{email}})
            if (!user) throw CustomHttpException(ERROR.EMAIL_UNAVAILABLE, HttpStatus.NOT_FOUND)
 
            return user.id
        }

        returnUserRepository(){
            return this.userRepository
        }

}

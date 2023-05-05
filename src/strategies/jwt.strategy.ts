import { Injectable, UnauthorizedException } from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import { Strategy,ExtractJwt } from 'passport-jwt'
import { globalKeyVariables } from 'src/config/env.config'

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy){
    constructor(){

        super({secretOrKey:globalKeyVariables().JWT_KEY,
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()})
    } 
    
    async validate(payload){ 
      return {
        name:payload.name,
        email:payload.email
      }
    }
}
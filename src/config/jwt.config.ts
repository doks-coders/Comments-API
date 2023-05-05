import { JwtModuleOptions,JwtModuleAsyncOptions } from "@nestjs/jwt"
import { globalKeyVariables } from "./env.config"

export const jwtConfigAsync:JwtModuleAsyncOptions ={
    useFactory: async ():Promise<any>=>{     
        return{
            secret:globalKeyVariables().JWT_KEY,
            signOptions:{expiresIn:globalKeyVariables().AUTH_EXPIRY}
     }
    }
}
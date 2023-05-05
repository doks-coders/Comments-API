import {HttpStatus,ValidationPipe,HttpException} from '@nestjs/common'
import { ERROR_NAMES } from 'src/utils/strings.constants'
export const ErrorValidation =  new ValidationPipe({
    errorHttpStatusCode:HttpStatus.UNPROCESSABLE_ENTITY
})

export const STRONG_PASSWORD_CONFIG = {
    minLowercase:1,minUppercase:1,minLength:8,minNumbers:1,minSymbols:1
}


export const CustomHttpException =(message:string,statusCode:number)=> new HttpException({
    statusCode,
    message:[message],
    error:ERROR_NAMES[statusCode]},statusCode) 
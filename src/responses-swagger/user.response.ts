import { ApiProperty } from "@nestjs/swagger/dist"
import {ERROR,ERROR_MESSAGE_RESPONSE,ERROR_NAMES, SUCCESS} from "src/utils/strings.constants"
import { HttpStatus } from "@nestjs/common/enums"



/************************Sign Up Responses (Ok)******************************************/

class UserObject {
    @ApiProperty({ description: `This is the api for verifying the user's account, get the id from the route leading to your verification page and make a get request with this api `, example: 'http://mywebsite.com/auth/email-verification/${:id}' })
    email_auth_link: string

    @ApiProperty({ description: 'This is the success message', example: 'Account Created Succesfully' })
    message: string

}
export class CreatedUserResponse {
    @ApiProperty({ description: `The route request`, example: HttpStatus.CREATED })
    statusCode: number
    @ApiProperty({
        description: `This is the response body`,
        type: UserObject
    })
    responseValue: object
}

/************************Sign Up Responses (Error)******************************************/

export class EmailConflictResponse{
    @ApiProperty({ description: `The route request`, example: HttpStatus.FORBIDDEN })
    statusCode: number
    @ApiProperty({
        description: `This is the error message`,
        example:[ERROR.EMAIL_CONFLICT_RESPONSE]

    })
    message: object

    
    @ApiProperty({ description: `This will display the name of the error`, example: ERROR_NAMES[HttpStatus.FORBIDDEN] })
    error:string
}


export class WrongPasswordFormatResponse{
    @ApiProperty({ description: `The route request`, example: HttpStatus.UNPROCESSABLE_ENTITY })
    statusCode:number

    @ApiProperty({ description: `This is the error message`, example: [
       [ERROR.PASSWORD_VALIDATION_ERROR]
    ] })
  
    message:object

    @ApiProperty({ description: `This will display the name of the error`, example: ERROR_NAMES[HttpStatus.UNPROCESSABLE_ENTITY] })
    error:string
}

export class PasswordMismatchResponse {
    @ApiProperty({ description: `The route request`, example: HttpStatus.UNPROCESSABLE_ENTITY })
    statusCode:number

    @ApiProperty({ description: `This is the error message`, example: [
       [ERROR.PASSWORD_MISMATCH_RESPONSE]
    ] })
  
    message:object

    @ApiProperty({ description: `This will display the name of the error`, example: ERROR_NAMES[HttpStatus.UNPROCESSABLE_ENTITY] })
    error:string

}


/*************************************************************** */


export class UnauthorizedPasswordResetResponse {
    
    @ApiProperty({ description: `The route request`, example: HttpStatus.UNAUTHORIZED })
    statusCode:number

    @ApiProperty({ description: `This is the error message`, example: [
       [ERROR.UNAUTHORIZED_REQUEST]
    ] })
  
    message:object

    @ApiProperty({ description: `This will display the name of the error`, example: ERROR_NAMES[HttpStatus.UNAUTHORIZED] })
    error:string
}

export class EmailLinkExpiredResponse {
    
    @ApiProperty({ description: `The route request`, example: HttpStatus.FORBIDDEN })
    statusCode:number

    @ApiProperty({ description: `This is the error message`, example: [
       [ERROR_MESSAGE_RESPONSE['jwt expired']]
    ] })
  
    message:object

    @ApiProperty({ description: `This will display the name of the error`, example: ERROR_NAMES[HttpStatus.FORBIDDEN] })
    error:string
}











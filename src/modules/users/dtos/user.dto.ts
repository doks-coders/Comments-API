import { IsNotEmpty, Length,IsEmail } from "class-validator"


/**
 * This is the User DTO object that is gotten from the frontend and used for adding questions to the database
 *
 * @see [MAXDRIVE Status Codes](https://docs.nestjs.com/controllers#status-code)
 *
 * @publicApi
 */

export class UserDto {
    @IsNotEmpty({ message: 'Should have a name' }) 
    @Length(1, 200)
    readonly name: string

    @IsNotEmpty({ message: 'Should have a name' }) 
    @Length(1, 200)
    @IsEmail()
    readonly email: string


    @IsNotEmpty({ message: 'Should have a Password' }) 
    @Length(6, 200)
    readonly password: string

    @IsNotEmpty({ message: 'Should verify Password' }) 
    @Length(6, 200)
    readonly passwordVerify: string

}

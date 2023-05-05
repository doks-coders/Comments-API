import { IsNotEmpty, Length } from "class-validator"

interface options {
    answer: string
}
/**
 * This is the quiz DTO object that is gotten from the frontend and used for adding questions to the database
 *
 * @see [MAXDRIVE Status Codes](https://docs.nestjs.com/controllers#status-code)
 *
 * @publicApi
 */

export class LoginUserDto {
    @IsNotEmpty({ message: 'Should have a name' }) 
    @Length(1, 200)
    readonly email: string


    @IsNotEmpty({ message: 'Should have a Password' }) 
    @Length(1, 200)
    readonly password: string

}

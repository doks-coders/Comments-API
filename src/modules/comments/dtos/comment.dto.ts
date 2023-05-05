import { IsNotEmpty, Length } from "class-validator"

/**
 * This is the quiz DTO object that is gotten from the frontend and used for adding questions to the database
 *
 * @see [MAXDRIVE Status Codes](https://docs.nestjs.com/controllers#status-code)
 *
 * @publicApi
 */

export class CommentDto {
    @IsNotEmpty({ message: 'Should have a Comment' }) 
    @Length(1, 200)
    readonly text: string
}

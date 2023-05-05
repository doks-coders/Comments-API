import { HttpStatus, UseGuards,Controller,Get,Post,Put,Patch,Delete,Body,HttpCode,UnprocessableEntityException,Param,Query,Req } from '@nestjs/common';
import { ErrorValidation } from 'src/utils/global.constants';
import { CommentDto } from '../dtos/comment.dto';
import { CommentsService } from '../services/comments.service';
import { UsersService } from 'src/modules/users/services/users.service';
import { SingleComment } from '../entities/comment.entity';
import { AuthGuard } from '@nestjs/passport';
import { SuccesResponse } from 'src/config/response.status';
import { SUCCESS } from 'src/utils/strings.constants';
import { UserJWT } from 'src/interfaces/user-jwt.interface';
@Controller('comments')
export class CommentsController {
    constructor(private commentService:CommentsService,private userService:UsersService){}

@UseGuards(AuthGuard('jwt'))    
@Post('/create-comment')
async createComment(@Body(ErrorValidation) newComment:CommentDto,@Query('itemId') itemId:string,@Req() req){
const userId = await this.userService.getUserIDFromEmail(req.user.email)
const comment = await this.commentService.addCommentsToDatabase(newComment,Number(itemId),Number(userId))
return new SuccesResponse(HttpStatus.CREATED,{message:SUCCESS.COMMENT_CREATED,commentId:comment.id})
}
 

@UseGuards(AuthGuard('jwt'))
@Post('/reply-comment')

async replyComment(@Body(ErrorValidation) newComment:CommentDto,@Query('commentId') commentId:string,@Req() req){
const userId = await this.userService.getUserIDFromEmail(req.user.email)
await this.commentService.addReplyCommentToDatabase(newComment,Number(commentId),Number(userId))
return  new SuccesResponse(HttpStatus.CREATED,{message:SUCCESS.REPLY_CREATED})

}

@Get('/all-comments')
async getAllComments():Promise<SingleComment[]>{
const allComments = await this.commentService.getAllComments()
return allComments
}


@Get('/specific-comment/:id')
async getCommentById(@Param('id') commentId):Promise<SingleComment>{
const comment = await this.commentService.getCommentById(commentId)
return comment
}

@UseGuards(AuthGuard('jwt'))
@Delete('/delete-comment/:id')
async getDeleteById(@Param('id') commentId, @Req() req):Promise<SuccesResponse>{
  const userObject = <UserJWT> req.user
 await this.commentService.deleteCommentsFromDataBase(commentId,userObject.email)
return new SuccesResponse(HttpStatus.OK,{message:'Deleted Successfully'})
}



}

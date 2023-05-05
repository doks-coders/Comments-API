import { Injectable, HttpStatus } from '@nestjs/common';
import { SingleComment } from '../entities/comment.entity';
import { CommentDto } from '../dtos/comment.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsService } from 'src/modules/items/services/items.service';
import { UsersService } from 'src/modules/users/services/users.service';
import { ERROR } from 'src/utils/strings.constants';
import { CustomHttpException } from 'src/utils/global.constants';
@Injectable()
export class CommentsService {
    constructor(@InjectRepository(SingleComment)
    private commentsRepository: Repository<SingleComment>,
        private itemsService: ItemsService,
        private userService: UsersService) { }

    /**
     * @param commentInserted 
     * @param itemId 
     * @param userId 
     * @returns 
     */
    async addCommentsToDatabase(commentInserted: CommentDto, itemId: number, userId: number) {

        const newComment = await this.saveComment(commentInserted, userId)
        if (!newComment) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)
        const item_result = await this.itemsService.saveCommentToItem(itemId, newComment)
        if (!item_result) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)
        const user_result = await this.itemsService.saveCommentToUser(userId, newComment)
        if (!user_result) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)

        return newComment
    }

    async addReplyCommentToDatabase(commentInserted: CommentDto, commentId: number, userId: number) {
        const newReply = await this.saveComment(commentInserted, userId)
        if (!newReply) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)
        const comment_result = await this.saveReplyToComment(commentId, newReply)
        if (!comment_result) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)
        const user_result = await this.itemsService.saveCommentToUser(userId, newReply)
        if (!user_result) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)

        return comment_result

    }




   async deleteCommentsFromDataBase(id:number,email:string) {
        const result = await this.commentsRepository.findOne({ where:{id},relations:['users']})
       if(!result) throw CustomHttpException(ERROR.NOT_FOUND,HttpStatus.NOT_FOUND)
  
       if(email === result.users[0].email){
        console.log('Email Matches')
        await this.commentsRepository.remove(result)
        return result
    }
        throw CustomHttpException(ERROR.EMAIL_UNAUTHORIZED,HttpStatus.UNAUTHORIZED)   
    }

    async getAllComments(): Promise<SingleComment[]> {
        const result = await this.commentsRepository.find({ relations: ['replies'] })
        return result
    }

    async getCommentById(commentId): Promise<SingleComment> {
        const result = await this.commentsRepository.findOne({ where: { id: commentId }, relations: ['replies'] })
        if (!result) throw CustomHttpException(ERROR.NOT_FOUND, HttpStatus.NOT_FOUND)
        return result
    }


    async getCommentsRelationById(id: number): Promise<SingleComment> {
        const result = await this.commentsRepository.findOne({ where: { id }, relations: ['replies', 'author'] })
        if (!result) throw CustomHttpException(ERROR.NOT_FOUND, HttpStatus.NOT_FOUND)
        return result
    }

    //Utils
    async saveComment(commentInserted: CommentDto, userId: number) {
        const singleComment = new SingleComment()
        const user = await this.userService.getUsersById(userId)
        singleComment.text = commentInserted.text
        singleComment.userId = userId
        singleComment.users = [user]
        return await singleComment.save()
    }

    async getCommentByRelations(id: number): Promise<SingleComment> {
        const result = await this.commentsRepository.findOne({ where: { id }, relations: ['replies'] })
        return result
    }



    async saveReplyToComment(commentId: number, newReply) {
        const parentComment = await this.getCommentByRelations(commentId);
        (parentComment.replies) ?
            parentComment.replies = [...parentComment.replies, newReply]
            :
            parentComment.replies = [newReply];
        let result = await parentComment.save()
        return result

    }



}

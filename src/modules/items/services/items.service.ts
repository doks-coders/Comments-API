import { HttpStatus, Injectable } from '@nestjs/common';
import { Item } from '../entities/item.entity';
import { ItemDto } from '../dtos/item.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { userDatasource } from 'datatasource.config';
import { UsersService } from 'src/modules/users/services/users.service';
import { User } from 'src/modules/users/entities/user.entity';
import { CustomHttpException } from 'src/utils/global.constants';
import { ERROR } from 'src/utils/strings.constants';
import { itemPagination } from 'src/interfaces/pagination.interface';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
        , @InjectRepository(Item) private itemRepository: Repository<Item>) { }

    async addItemToDatabase(itemInserted: ItemDto, userId: number) {
        let user = await this.userRepository.findOne({ where: { id: userId }, relations: { allcomments: true } });
        if (!user) throw CustomHttpException(ERROR.USER_UNAVAILABLE, HttpStatus.NOT_FOUND)

        const item = new Item()
        item.name = itemInserted.name
        item.users = [user]
        const newItem = await item.save()
        if (!newItem) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)
        const user_result = await this.saveItemToUser(userId, newItem)
        if (!user_result) throw CustomHttpException(ERROR.DATABASE_WRITE_FAILED, HttpStatus.INTERNAL_SERVER_ERROR)
        return newItem
    }
    async deleteItemFromDataBase(id:number,email:string) {
        const result = await this.itemRepository.findOne({ where:{id},relations:['users']})
        if(!result) throw CustomHttpException(ERROR.NOT_FOUND,HttpStatus.NOT_FOUND)
         if(email === result.users[0].email){
         result.comments = []
         result.users = []
         await result.save()
         await this.itemRepository.remove(result)
         return result
     }  
     throw CustomHttpException(ERROR.EMAIL_UNAUTHORIZED,HttpStatus.UNAUTHORIZED)   
    }

    async getAllItems(): Promise<Item[]> {
        const result = await this.itemRepository.find({ relations: ['comments'] })
        if (!result) throw CustomHttpException(ERROR.NOT_FOUND, HttpStatus.NOT_FOUND)

        return result
    }



    async getAllItemsWithSpecifications(): Promise<Item[]> {
        let res = await this.itemRepository.createQueryBuilder('item')
            .leftJoinAndSelect('item.users', 'user')
            .leftJoinAndSelect('item.comments', 'comment', 'item.id = comment.itemId')
            .leftJoinAndSelect('comment.users', 'users')
            .leftJoinAndSelect('comment.replies', 'reply', 'comment.id = reply.parentCommentId')
            .getMany();



        if (!res) throw CustomHttpException(ERROR.NOT_FOUND, HttpStatus.NOT_FOUND)

        return res
    }


    async paginate(options: IPaginationOptions, itemId): Promise<Pagination<Item>> {
        //   orderBy(sort: string, order?: "ASC" | "DESC", nulls?: "NULLS FIRST" | "NULLS LAST"): this;

        const qb = this.itemRepository.createQueryBuilder('item')
            .where('item.id= :itemId', { itemId })
            .leftJoinAndSelect('item.comments', 'comment')

            ;
        return paginate<Item>(qb, options)
    }

    async getItemById(itemId: number): Promise<Item> {
        let res = await this.itemRepository.createQueryBuilder('item')
            .where('item.id= :itemId', { itemId })
            .leftJoinAndSelect('item.users', 'user')
            .leftJoinAndSelect('item.comments', 'comment', 'item.id = comment.itemId')
            .leftJoinAndSelect('comment.users', 'users')
            .getOne();


        if (!res) throw CustomHttpException(ERROR.NOT_FOUND, HttpStatus.NOT_FOUND)

        return res
    }


    async getItemRelationById(id: number): Promise<Item> {
        const result = await this.itemRepository.findOne({ where: { id }, relations: ['comments'] })
        if (!result) throw CustomHttpException(ERROR.ITEM_UNAVAILABLE, HttpStatus.NOT_FOUND)
        return result
    }

    async saveCommentToItem(itemId: number, newComment: any) {
        let item = await this.getItemRelationById(itemId);
        (item.comments) ?
            item.comments = [...item.comments, newComment]
            :
            item.comments = [newComment];
        let result = await item.save()
        return result
    }

    async saveCommentToUser(userId: number, newComment: any) {
        let user = await this.userRepository.findOne({ where: { id: userId }, relations: { allcomments: true } });
        (user.allcomments) ?
            user.allcomments = [...user.allcomments, newComment]
            :
            user.allcomments = [newComment];

        let result = await user.save()
        return result
    }


    async saveItemToUser(userId: number, item: any) {
        let user = await this.userRepository.findOne({ where: { id: userId }, relations: { allitems: true } });
        (user.allitems) ?
            user.allitems = [...user.allitems, item]
            :
            user.allitems = [item];

        let result = await user.save()
        return result
    }










}

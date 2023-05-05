import { UseGuards, Req, Controller, Get, Post, Put, Patch, Delete, Body, HttpCode, UnprocessableEntityException, Param, HttpStatus, Query } from '@nestjs/common';
import { ErrorValidation } from 'src/utils/global.constants';
import { ItemDto } from '../dtos/item.dto';
import { ItemsService } from '../services/items.service';
import { Item } from '../entities/item.entity';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/modules/users/services/users.service';
import { SuccesResponse } from 'src/config/response.status';
import { SUCCESS } from 'src/utils/strings.constants';
import { Pagination, IPaginationMeta } from 'nestjs-typeorm-paginate';
import { UserJWT } from 'src/interfaces/user-jwt.interface';
@Controller('items')
export class ItemsController {
    constructor(private itemService: ItemsService,
        private userService: UsersService) { }
    @Get('/get-all')
    async getAllItems(): Promise<Item[]> {
        const result = await this.itemService.getAllItems()
        return result
    }




    @Get('/get-all-specs')
    async getAllSpecs(): Promise<Item[]> {
        const result = await this.itemService.getAllItemsWithSpecifications()
        return result
    }

    @Post('/create-item')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    async addNewItem(@Body(ErrorValidation) newItem: ItemDto, @Req() req) {
        console.log(req.user)
        const userId = await this.userService.getUserIDFromEmail(req.user.email)
        const response = await this.itemService.addItemToDatabase(newItem, userId)
        if (!response) throw new UnprocessableEntityException('There was an error')
        return new SuccesResponse(HttpStatus.CREATED, { message: SUCCESS.ITEM_CREATED, itemId: response.id })
    }


    @Get('/specific-item/:id')
    async getItemById(@Param('id') itemId): Promise<Item> {
        const item = await this.itemService.getItemById(itemId)
        return item
    }


    @Get('/comments-pagination')
    async gerCommentsPagintion(
        @Query('itemId') itemId,
        @Query('commentLimit') commentLimit,
        @Query('commentPage') commentPage): Promise<Pagination<Item, IPaginationMeta>> {
        const selectedItems = await this.itemService.paginate({ limit: commentLimit, page: commentPage }, itemId)
        return selectedItems
    }

    @Delete('/delete-item/:id')
    @UseGuards(AuthGuard('jwt'))
    async deleteItem(@Param('id') id, @Req() req): Promise<SuccesResponse> {
        const user = <UserJWT>req.user
        await this.itemService.deleteItemFromDataBase(Number(id), user.email)
        return new SuccesResponse(HttpStatus.OK, { message: 'Item Deleted Successfully' })

    }


}

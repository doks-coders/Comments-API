import { Controller, Param, Get, Post, Put, Patch, Delete, Body, HttpCode, UnprocessableEntityException, UseGuards, Req, Res, HttpStatus } from '@nestjs/common';
import { ErrorValidation } from 'src/utils/global.constants';
import { UserDto } from '../dtos/user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UsersService } from '../services/users.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../entities/user.entity';
import { CustomHttpException } from 'src/utils/global.constants';
import { ERROR, ERROR_NAMES, SUCCESS } from 'src/utils/strings.constants';
import { SuccesResponse } from 'src/config/response.status';
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }
  @Post('/create-user')

  async registerUser(@Body(ErrorValidation) newUser: UserDto) {
    const { password, passwordVerify } = newUser
    if (password != passwordVerify) throw CustomHttpException(ERROR.PASSWORD_MISMATCH_RESPONSE, HttpStatus.UNPROCESSABLE_ENTITY)
    await this.usersService.registerUser(newUser)
    return new SuccesResponse(201, { message: SUCCESS.ACCOUNT_CREATED })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/view-user')
  async viewUser(@Req() req): Promise<any> {
    return req.user
  }

  @Post('/login-user')
  async loginUser(@Body(ErrorValidation) user: LoginUserDto) {
    const user_logged_in = await this.usersService.loginUser(user)
    return new SuccesResponse(HttpStatus.OK, { message: SUCCESS.SUCCESS_LOGIN, jwt: user_logged_in })
  }


  @Get('/get-specific-user/:id')
  async getSpecificUser(@Param("id") userId): Promise<SuccesResponse> {
    const user = await this.usersService.getUsersById(userId)
    return new SuccesResponse(HttpStatus.OK,user) 
  }

  @Get('/get-all-users')
  async getAllUsers(@Req() req): Promise<any> {
    return await this.usersService.getAllUsers()
  }


}

import { Controller, Get, Post, Body, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../Service/user.service';
import { IUser } from '../Interface/user.interface';
import { AuthMiddleware } from '../Middlewares/auth.middleware';
import { IPayload } from '../Interface/payload.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}
  @Post()
  async Login(
    @Res() res: Response,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log('entrei');
    const objLogin: IPayload = { email, password };
    const { type, message } = await this.usersService.login(objLogin);

    if (type) return res.status(type).json({ message });
    res.status(200).json({ token: message });
  }

  @Post('/new-user')
  async createUser(
    @Res() res: Response,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const objtService: IUser = {
      name,
      email,
      password,
    };
    const { type, message } = await this.usersService.register(objtService);
    if (type) return res.status(type).json({ message });
    res.status(200).json({ token: message });
  }

  @Get('/')
  @UseGuards(AuthMiddleware)
  getAllUsersController() {
    return this.usersService.getAllUserService();
  }
}

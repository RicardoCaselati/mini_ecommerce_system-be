// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Res,
//   UseInterceptors,
// } from '@nestjs/common';
// import { Response } from 'express';
// import { UsersService } from '../Service/user.service';
// import { IUser } from '../Interface/user.interface';
// import { AuthMiddleware } from '../Middlewares/auth.middleware';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post('/new-user')
//   async createUser(
//     @Res() res: Response,
//     @Body('name') name: string,
//     @Body('email') email: string,
//     @Body('password') password: string,
//   ) {
//     const objtService: IUser = {
//       name,
//       email,
//       password,
//     };
//     const { type, message } = await this.usersService.createUserService(
//       objtService,
//     );
//     if (type) return res.status(type).json({ message });
//     res.status(200).json({ token: message });
//   }
//   @Get('/')
//   @UseInterceptors(AuthMiddleware)
//   getAllUsersCntroller() {
//     return this.usersService.getAllUserService();
//   }
// }
import { Controller, Get, Post, Body, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../Service/user.service';
import { IUser } from '../Interface/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { AuthMiddleware } from '../Middlewares/auth.middleware';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
    const { type, message } = await this.usersService.createUserService(
      objtService,
    );
    if (type) return res.status(type).json({ message });
    res.status(200).json({ token: message });
  }

  @Get('/')
  @UseGuards(AuthMiddleware)
  getAllUsersCntroller() {
    return this.usersService.getAllUserService();
  }
}

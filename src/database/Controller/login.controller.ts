import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from '../Service/login.service';
import { IPayload } from '../Interface/payload.interface';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async Login(
    @Res() res: Response,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log('entrei');
    const objLogin: IPayload = { email, password };
    const { type, message } = await this.loginService.loginPayload(objLogin);

    if (type) return res.status(type).json({ message });
    res.status(200).json({ token: message });
  }
}

import { Request, Response, NextFunction } from 'express';
import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { IUser } from '../Interface/user.interface';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestWithUser extends Request {
  user?: IUser;
}

@Injectable()
export class AuthMiddleware {
  async use(req: RequestWithUser, res: Response, next: NextFunction) {
    const authorization = req.headers?.authorization;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const token = authorization?.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
      req.user = {
        name: decoded.name,
        email: decoded.email,
        password: '',
        ...decoded,
      } as IUser;

      return next();
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
}

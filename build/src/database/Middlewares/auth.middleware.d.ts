import { Request, Response, NextFunction } from 'express';
import { IUser } from '../Interface/user.interface';
export interface RequestWithUser extends Request {
    user?: IUser;
}
export declare class AuthMiddleware {
    use(req: RequestWithUser, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}

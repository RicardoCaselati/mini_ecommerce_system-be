import { Response } from 'express';
import { UserService } from '../Service/user.service';
import { IUser } from '../Interface/user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    Login(res: Response, email: string, password: string): Promise<Response<any, Record<string, any>>>;
    createUser(res: Response, name: string, email: string, password: string): Promise<Response<any, Record<string, any>>>;
    getAllUsersController(): Promise<IUser[]>;
}

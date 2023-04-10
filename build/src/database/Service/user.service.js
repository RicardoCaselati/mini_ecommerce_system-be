"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async register(user) {
        try {
            const userExists = await this.userModel.findOne({ email: user.email });
            if (userExists) {
                return { type: 401, message: 'User already registered' };
            }
            const salt = 10;
            const password = user.password;
            const hash = (0, bcryptjs_1.hashSync)(password, salt);
            const newUser = await this.userModel.create({
                name: user.name,
                email: user.email,
                password: hash,
            });
            const { email, _id, name } = newUser;
            const token = (0, jsonwebtoken_1.sign)({ email, id: _id, name }, process.env.JWT_SECRET, { expiresIn: '12h' });
            return { type: null, message: token };
        }
        catch (error) {
            console.log(error);
            return { type: 500, message: 'Internal server error.' };
        }
    }
    async login(payload) {
        const user = await this.userModel.findOne({ email: payload.email });
        if (!user || !(0, bcryptjs_1.compareSync)(payload.password, user.password)) {
            throw new common_1.UnauthorizedException('Incorrect email or password');
        }
        const { email, name } = user;
        const token = (0, jsonwebtoken_1.sign)({ email, name }, process.env.JWT_SECRET, {
            expiresIn: '12h',
        });
        return { type: null, message: token };
    }
    async validateUser(payload) {
        return await this.userModel.findOne({ email: payload.email });
    }
    async getAllUserService() {
        const usersRegistred = await this.userModel.find();
        return usersRegistred;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
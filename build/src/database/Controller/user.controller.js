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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../Service/user.service");
const auth_middleware_1 = require("../Middlewares/auth.middleware");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async Login(res, email, password) {
        const objLogin = { email, password };
        const { type, message, name } = await this.userService.login(objLogin);
        if (type)
            return res.status(type).json({ message });
        res.status(200).json({ token: message, name });
    }
    async createUser(res, name, email, password) {
        const objtService = {
            name,
            email,
            password,
        };
        const { type, message } = await this.userService.register(objtService);
        if (type)
            return res.status(type).json({ message });
        res.status(200).json({ token: message, name });
    }
    getAllUsersController() {
        return this.userService.getAllUserService();
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Login", null);
__decorate([
    (0, common_1.Post)('/new-user'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsersController", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
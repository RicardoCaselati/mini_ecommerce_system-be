"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let AuthMiddleware = class AuthMiddleware {
    async use(req, res, next) {
        var _a;
        const authorization = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        if (!authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            req.user = {
                name: decoded.name,
                email: decoded.email,
                password: '',
                ...decoded,
            };
            return next();
        }
        catch (err) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_middleware_1 = require("./database/Middlewares/auth.middleware");
const user_controller_1 = require("./database/Controller/user.controller");
const user_service_1 = require("./database/Service/user.service");
const user_module_1 = require("./database/Modules/user.module");
const product_controller_1 = require("./database/Controller/product.controller");
const product_service_1 = require("./database/Service/product.service");
const product_module_1 = require("./database/Modules/product.module");
const user_schema_1 = require("./database/Schema/user.schema");
const product_schema_1 = require("./database/Schema/product.schema");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .exclude({ path: '/user/login', method: 'POST' }, { path: '/user/new-user', method: 'POST' }, { path: '/products/', method: 'GET' })
            .forRoutes({ path: '*', method: 'ALL' });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Product', schema: product_schema_1.ProductSchema },
            ]),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_DB_URL || 'mongodb://db/mini_ecommerce_system_db'),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '60s' },
            }),
            core_1.RouterModule.register([
                { path: '/user', module: user_module_1.UserModule },
                { path: '/products', module: product_module_1.ProductModule },
            ]),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, product_controller_1.ProductsController],
        providers: [app_service_1.AppService, user_service_1.UserService, product_service_1.ProductService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
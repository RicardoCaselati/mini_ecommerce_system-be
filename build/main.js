"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app_module_1 = require("./app.module");
const server = (0, express_1.default)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map
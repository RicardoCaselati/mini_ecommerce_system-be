"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Connection_1 = __importDefault(require("./database/Models/Connection"));
const PORT = process.env.PORT || 3001;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await (0, Connection_1.default)();
    await app.listen(PORT);
    console.log(`Running server on port: ${PORT}`);
}
bootstrap();
//# sourceMappingURL=server.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const mongoose_3 = require("@nestjs/mongoose");
const seed_1 = require("./src/database/Seed/seed");
require("dotenv/config");
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://db/mini_ecommerce_system_db';
let ConnectToDatabase = class ConnectToDatabase {
    constructor(userModel, productModel) {
        this.userModel = userModel;
        this.productModel = productModel;
    }
    async connectToDatabase(mongoDatabaseURI = MONGO_DB_URL) {
        try {
            await mongoose_1.default.connect(mongoDatabaseURI, {
                connectTimeoutMS: 10000,
                socketTimeoutMS: 30000,
            });
            console.log('Connecting to database...');
            const SeedDatabase = new seed_1.seedDatabase(this.userModel, this.productModel);
            await this.userModel.deleteMany();
            await this.productModel.deleteMany();
            await SeedDatabase.seed();
        }
        catch (error) {
            console.error('Error connecting to database', error);
        }
    }
};
ConnectToDatabase = __decorate([
    __param(0, (0, mongoose_3.InjectModel)('User')),
    __param(1, (0, mongoose_3.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ConnectToDatabase);
exports.ConnectToDatabase = ConnectToDatabase;
//# sourceMappingURL=Connection.js.map
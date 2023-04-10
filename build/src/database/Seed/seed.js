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
exports.seedDatabase = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_seeder_1 = require("./user.seeder");
const product_seeder_1 = require("./product.seeder");
let seedDatabase = class seedDatabase {
    constructor(userModel, productModel) {
        this.userModel = userModel;
        this.productModel = productModel;
    }
    async seed() {
        try {
            console.log('Iniciando a popular o banco de dados...');
            await this.userModel.create(user_seeder_1.userData);
            await this.productModel.create(product_seeder_1.productData);
            console.log('Banco de dados populado com sucesso.');
        }
        catch (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
        }
    }
};
seedDatabase = __decorate([
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __param(1, (0, mongoose_2.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], seedDatabase);
exports.seedDatabase = seedDatabase;
//# sourceMappingURL=seed.js.map
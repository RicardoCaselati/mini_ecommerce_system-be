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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../Service/product.service");
const auth_middleware_1 = require("../Middlewares/auth.middleware");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    getAllProductsController() {
        return this.productService.getAllProductsService();
    }
    async createProductController(res, name, price, qty, image, description) {
        const objtService = {
            name,
            price,
            qty,
            image,
            description,
        };
        const { type, data } = await this.productService.createProductService(objtService);
        if (type)
            return res.status(type).json(data);
        res.status(200).json(data);
    }
    async getProductByIdController(id) {
        return this.productService.getProductByIdService(id);
    }
    updateProductByIdController(id, name, price, qty, image, description) {
        const objToUpdate = {
            name,
            price,
            qty,
            image,
            description,
        };
        return this.productService.updateProductByIdService(id, objToUpdate);
    }
    deleteProductByIdController(id) {
        return this.productService.deleteProductByIdService(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getAllProductsController", null);
__decorate([
    (0, common_1.Post)('/new-product'),
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('price')),
    __param(3, (0, common_1.Body)('qty')),
    __param(4, (0, common_1.Body)('image')),
    __param(5, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProductController", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductByIdController", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('price')),
    __param(3, (0, common_1.Body)('qty')),
    __param(4, (0, common_1.Body)('image')),
    __param(5, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateProductByIdController", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)(auth_middleware_1.AuthMiddleware),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteProductByIdController", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=product.controller.js.map
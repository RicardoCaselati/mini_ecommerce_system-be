import { Response } from 'express';
import { ProductService } from '../Service/product.service';
import { IProduct } from '../Interface/product.interface';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProductsController(): Promise<IProduct[]>;
    createProductController(res: Response, name: string, price: number, qty: number, image: string, description: string): Promise<Response<any, Record<string, any>>>;
    getProductByIdController(id: string): Promise<IProduct>;
    updateProductByIdController(id: string, name: string, price: number, qty: number, image: string, description: string): Promise<IProduct>;
    deleteProductByIdController(id: string): Promise<IProduct>;
}

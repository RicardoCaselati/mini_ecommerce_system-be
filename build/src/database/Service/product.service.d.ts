import { IProduct } from '../Interface/product.interface';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<IProduct>);
    getAllProductsService(): Promise<IProduct[]>;
    createProductService(product: IProduct): Promise<{
        type: number | null;
        data: IProduct;
    }>;
    getProductByIdService(id: string): Promise<IProduct>;
    updateProductByIdService(id: string, product: IProduct): Promise<IProduct>;
    deleteProductByIdService(id: string): Promise<IProduct>;
}

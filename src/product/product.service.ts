import {Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {Product} from "src/product/schema/product.schema";
import {InjectModel} from "@nestjs/mongoose";
import {ProductInterface} from "src/product/interface/product.interface";
import {ProductDto} from "src/product/dto/product.dto";

@Injectable()
export class ProductService {


    constructor(@InjectModel('Product') readonly productModel: Model<ProductInterface>) {
    }

    async getProducts(): Promise<ProductInterface[]> {
        const products = await this.productModel.find();
        return products;

    }

    async createProduct(productDto: ProductDto): Promise<ProductDto> {
        const newProduct = new this.productModel(productDto);
        return newProduct.save();
    }
}

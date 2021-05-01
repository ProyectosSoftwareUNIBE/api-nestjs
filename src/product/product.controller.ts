import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import {ProductDto} from "src/product/dto/product.dto";
import {ProductService} from "src/product/product.service";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {
    }

    @Get('/')
    async getAllProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json(products);
    }

    @Post('/')
    async createProduct(@Res() res, @Body() product: ProductDto) {
        const productResponse = await this.productService.createProduct(product);
        return res.status(HttpStatus.OK).json({message:'Producto creado con exito'});
    }

}

import { Controller, Get, Post, Put, Patch, Delete, Query, Param, Body, HttpCode } from '@nestjs/common';
import { GetProductDto } from './dto/get-product';
import { CreateProductDto } from './dto/create-product';
import { UpdateProductDto } from './dto/update-product';
import { PatchProductDto } from './dto/patch-product';
import { DeleteProductDto } from './dto/delete-product';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    @HttpCode(201)
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    async findOne(@Param('id') id: number): Promise<Product> {
        console.log('id', id);
        return this.productsService.findOne(Number(id));
    }

    @Get('price/:price')
    @HttpCode(200)
    async findByPrice(@Param('price') price: number): Promise<Product[]> {
        console.log('price', price);
        return this.productsService.findByPrice(Number(price));
    }

    @Put(':id')
    @HttpCode(200)
    async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
        return this.productsService.update(Number(id), updateProductDto);
    }

    @Patch(':id')
    @HttpCode(200)
    async patch(@Param('id') id: number, @Body() patchProductDto: PatchProductDto): Promise<Product> {
        return this.productsService.patch(Number(id), patchProductDto);
    }

    @Delete(':id')
    @HttpCode(200)
    async delete(@Param('id') id: number): Promise<void> {
        this.productsService.delete(Number(id));
    }
}

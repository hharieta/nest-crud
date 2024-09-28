import { Controller, Get, Post, Put, Patch, Delete, Param, Body, HttpCode, Query } from '@nestjs/common';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product';
import { UpdateProductDto } from './dto/update-product';
import { PatchProductDto } from './dto/patch-product';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }

    @Get()
    @HttpCode(200)
    async findAll(@Query() query : {name?: string, price?: number}): Promise<Product[]> {
        return this.productsService.findAll(query);
    }

    @Get(':id')
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    async findOne(@Param('id') id: number): Promise<Product> {
        //console.log('id', id);
        return this.productsService.findOne(Number(id));
    }

    @Get('price/:price')
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    async findByPrice(@Param('price') price: number): Promise<Product[]> {
        //console.log('price', price);
        return this.productsService.findByPrice(Number(price));
    }

    @Put(':id')
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
        return this.productsService.update(Number(id), updateProductDto);
    }

    @Patch(':id')
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    async patch(@Param('id') id: number, @Body() patchProductDto: PatchProductDto): Promise<Product> {
        return this.productsService.patch(Number(id), patchProductDto);
    }

    @Delete(':id')
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    async delete(@Param('id') id: number): Promise<void> {
        this.productsService.delete(Number(id));
    }
}

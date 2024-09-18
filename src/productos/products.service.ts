import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product';
import { UpdateProductDto } from './dto/update-product';
import { PatchProductDto } from './dto/patch-product';

@Injectable()
export class ProductsService {
    private  products: Product[] = [{
        id: 1,
        name: 'Product 1',
        price: 100,
        url: "https://www.google.com"
    }, {
        id: 2,
        name: 'Product 2',
        price: 200,
        url: "https://www.google.com"
    }, {
        id: 3,
        name: 'Product 3',
        price: 300,
        url: "https://www.google.com"
    }, {
        id: 4,
        name: 'Product 4',
        price: 400,
        url: "https://www.google.com"
    }, {
        id: 5,
        name: 'Product 5',
        price: 500,
        url: "https://www.google.com"
    }];

    private currentId = this.products.length;

    create(createProductDto: CreateProductDto): Product {
        const newProduct: Product = {
            id: ++this.currentId,
            ...createProductDto
        };
        this.products.push(newProduct);

        return newProduct;
    }

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: number): Product {
        console.log('find by id', id);
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new NotFoundException(`Product with id ${id} was not found`);
        }
        return product
    }

    findByPrice(price: number): Product[] {
        console.log('find by price', price);
        return this.products.filter(product => product.price <= price);
    }

    update(id: number, updateProductDto: UpdateProductDto): Product {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            return null;
        }

        this.products[productIndex] = {id, ...updateProductDto};;

        return this.products[productIndex];
    }

    patch(id: number, patchProductDto: PatchProductDto): Product {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            return null;
        }

        this.products[productIndex] = { ...this.products[productIndex], ...patchProductDto };

        return this.products[productIndex];
    }

    delete(id: number): void {
        const productIndex = this.products.findIndex(product => product.id === id);
        this.products.splice(productIndex, 1);
    }
}

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
import { Injectable, NotFoundException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Products } from './entities/products.entity.js';
let ProductsService = class ProductsService {
    productsRepo;
    constructor(productsRepo) {
        this.productsRepo = productsRepo;
    }
    async create(dto) {
        const product = this.productsRepo.create(dto);
        const saved = await this.productsRepo.save(product);
        return {
            message: 'Product created successfully',
            data: saved,
        };
    }
    async findAll() {
        const products = await this.productsRepo.find({
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            message: 'Products retrieved successfully',
            count: products.length,
            data: products,
        };
    }
    async findOne(id) {
        const product = await this.productsRepo.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return {
            message: 'Product found successfully',
            data: product,
        };
    }
    async update(id, dto) {
        const product = await this.productsRepo.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        Object.assign(product, dto);
        const updated = await this.productsRepo.save(product);
        return {
            message: 'Product updated successfully',
            data: updated,
        };
    }
    async replace(id, dto) {
        const product = await this.productsRepo.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        Object.assign(product, dto);
        const updated = await this.productsRepo.save(product);
        return {
            message: 'Product replaced successfully',
            data: updated,
        };
    }
    async remove(id) {
        const product = await this.productsRepo.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        await this.productsRepo.delete(id);
        return {
            message: 'Product deleted successfully',
            id: id,
        };
    }
    async findByCategory(category) {
        const products = await this.productsRepo.find({
            where: {
                category: category,
            },
        });
        return {
            message: 'Category products retrieved successfully',
            count: products.length,
            data: products,
        };
    }
    async search(keyword) {
        const products = await this.productsRepo.find({
            where: {
                name: ILike(`%${keyword}%`),
            },
        });
        return {
            message: 'Search completed successfully',
            count: products.length,
            data: products,
        };
    }
    async toggleActive(id) {
        const product = await this.productsRepo.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        product.isActive = !product.isActive;
        const updated = await this.productsRepo.save(product);
        return {
            message: 'Product status changed successfully',
            data: updated,
        };
    }
};
ProductsService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Products)),
    __metadata("design:paramtypes", [Repository])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map
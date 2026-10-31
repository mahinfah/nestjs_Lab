
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';

import { Products } from './entities/products.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>,
  ) {}

  // 1. CREATE PRODUCT
  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);

    const saved = await this.productsRepo.save(product);

    return {
      message: 'Product created successfully',
      data: saved,
    };
  }

  // 2. FIND ALL PRODUCTS
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

  // 3. FIND ONE PRODUCT
  async findOne(id: number) {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with id ${id} not found`,
      );
    }

    return {
      message: 'Product found successfully',
      data: product,
    };
  }

  // 4. UPDATE PRODUCT (PATCH)
  async update(
    id: number,
    dto: PartialUpdateProductDto,
  ) {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with id ${id} not found`,
      );
    }

    Object.assign(product, dto);

    const updated = await this.productsRepo.save(product);

    return {
      message: 'Product updated successfully',
      data: updated,
    };
  }

  // 5. REPLACE PRODUCT (PUT)
  async replace(
    id: number,
    dto: UpdateProductDto,
  ) {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with id ${id} not found`,
      );
    }

    Object.assign(product, dto);

    const updated = await this.productsRepo.save(product);

    return {
      message: 'Product replaced successfully',
      data: updated,
    };
  }

  // 6. DELETE PRODUCT
  async remove(id: number) {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with id ${id} not found`,
      );
    }

    await this.productsRepo.delete(id);

    return {
      message: 'Product deleted successfully',
      id: id,
    };
  }

  // 7. FIND BY CATEGORY
  async findByCategory(category: string) {
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

  // 8. SEARCH BY NAME
  async search(keyword: string) {
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

  // 9. TOGGLE ACTIVE STATUS
  async toggleActive(id: number) {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with id ${id} not found`,
      );
    }

    product.isActive = !product.isActive;

    const updated = await this.productsRepo.save(product);

    return {
      message: 'Product status changed successfully',
      data: updated,
    };
  }
}

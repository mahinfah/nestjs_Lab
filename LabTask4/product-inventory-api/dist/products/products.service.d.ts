import { Repository } from 'typeorm';
import { Products } from './entities/products.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';
export declare class ProductsService {
    private productsRepo;
    constructor(productsRepo: Repository<Products>);
    create(dto: CreateProductDto): Promise<{
        message: string;
        data: Products;
    }>;
    findAll(): Promise<{
        message: string;
        count: number;
        data: Products[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: Products;
    }>;
    update(id: number, dto: PartialUpdateProductDto): Promise<{
        message: string;
        data: Products;
    }>;
    replace(id: number, dto: UpdateProductDto): Promise<{
        message: string;
        data: Products;
    }>;
    remove(id: number): Promise<{
        message: string;
        id: number;
    }>;
    findByCategory(category: string): Promise<{
        message: string;
        count: number;
        data: Products[];
    }>;
    search(keyword: string): Promise<{
        message: string;
        count: number;
        data: Products[];
    }>;
    toggleActive(id: number): Promise<{
        message: string;
        data: Products;
    }>;
}

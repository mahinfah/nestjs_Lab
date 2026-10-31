import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(dto: CreateProductDto): Promise<{
        message: string;
        data: import("./entities/products.entity.js").Products;
    }>;
    findAll(): Promise<{
        message: string;
        count: number;
        data: import("./entities/products.entity.js").Products[];
    }>;
    search(keyword: string): Promise<{
        message: string;
        count: number;
        data: import("./entities/products.entity.js").Products[];
    }>;
    findByCategory(category: string): Promise<{
        message: string;
        count: number;
        data: import("./entities/products.entity.js").Products[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: import("./entities/products.entity.js").Products;
    }>;
    update(id: number, dto: PartialUpdateProductDto): Promise<{
        message: string;
        data: import("./entities/products.entity.js").Products;
    }>;
    replace(id: number, dto: UpdateProductDto): Promise<{
        message: string;
        data: import("./entities/products.entity.js").Products;
    }>;
    remove(id: number): Promise<{
        message: string;
        id: number;
    }>;
    toggleActive(id: number): Promise<{
        message: string;
        data: import("./entities/products.entity.js").Products;
    }>;
}

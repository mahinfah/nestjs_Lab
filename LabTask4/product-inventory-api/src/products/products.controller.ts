
import {Controller,Get, Post,Patch,Put,  Delete, Body, Param, Query, ParseIntPipe,} from '@nestjs/common';

import { ProductsService } from './products.service.js';

import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productsService: ProductsService,
  ) {}

  // 1. CREATE PRODUCT
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  // 2. GET ALL PRODUCTS
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // 3. SEARCH PRODUCTS
  @Get('search')
  search(@Query('keyword') keyword: string) {
    return this.productsService.search(keyword);
  }

  // 4. FILTER BY CATEGORY
  @Get('category/:cat')
  findByCategory(@Param('cat') category: string) {
    return this.productsService.findByCategory(category);
  }

  // 5. GET ONE PRODUCT
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // 6. UPDATE PRODUCT (PATCH)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PartialUpdateProductDto,
  ) {
    return this.productsService.update(id, dto);
  }

  // 7. REPLACE PRODUCT (PUT)
  @Put(':id')
  replace(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProductDto,
  ) {
    return this.productsService.replace(id, dto);
  }

  // 8. DELETE PRODUCT
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }

  // 9. TOGGLE ACTIVE STATUS
  @Patch(':id/toggle')
  toggleActive(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.toggleActive(id);
  }
}

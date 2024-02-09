// src/products/products.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    console.log('Here is Products list ', createProductDto)
    const res = await this.productsService.create(createProductDto);
    return res
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: Partial<CreateProductDto>) {
    return this.productsService.update(id, updateProductDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }
}

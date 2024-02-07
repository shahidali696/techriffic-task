// src/products/dto/create-product.dto.ts
import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    type?: string;

    @IsString()
    @IsOptional()
    url?: string;

    @IsString()
    @IsOptional()
    details?: string;

    @IsInt()
    price: string;

    @IsString()
    userId: string;
}

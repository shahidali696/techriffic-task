// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.products.findMany();
  }

  async findById(id: string) {
    return this.prisma.products.findUnique({ where: { id } });
  }

  async create(data: { name: string; type?: string; url?: string; details?: string; price: string; userId: string }) {
    return this.prisma.products.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.products.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.products.delete({ where: { id } });
  }
}

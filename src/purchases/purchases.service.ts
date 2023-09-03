import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Purchase } from './purchase.model';
//import { Livro } from 'src/livro/livro.model';
//import { PrismaClient } from '@prisma/client';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  async purchaseLivro(compra: Purchase) {
    const product = await this.prisma.livro.findUnique({
      where: { livro_isbn: Number(compra.productId) },
    });

    if (!product) {
      throw new NotFoundException('Livro não encontrado');
    }

    await this.prisma.purchase.create({
      data: { buyer: compra.buyer, productId: compra.productId },
    });
    return { message: 'Compra bem sucedida!' };
  }
}

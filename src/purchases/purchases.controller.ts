import { Controller, Body, Post } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
//import { Livro } from 'src/livro/livro.model';
import { Purchase } from '@prisma/client';

@Controller('purchase')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  async purchaseProducts(@Body() postData: Purchase) {
    return this.purchasesService.purchaseLivro(postData.productId);
  }
}

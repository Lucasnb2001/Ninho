import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchasesModule } from './purchases/purchases.module';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [PurchasesModule, LivroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

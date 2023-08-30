import { Module } from '@nestjs/common';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LivroController],
  providers: [LivroService, PrismaService],
})
export class LivroModule {}

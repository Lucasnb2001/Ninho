import { Prisma } from '@prisma/client';

export class Livro implements Prisma.livroCreateInput {
  livro_isbn: number;
  livro_titulo: string;
  livro_preco: number;
  livro_idioma?: string;
  livro_num_pags?: number;
}

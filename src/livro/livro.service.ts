import { PrismaService } from 'src/prisma.service';
import { Livro } from './livro.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LivroService {
  constructor(private prisma: PrismaService) {}

  async getLivros(): Promise<Livro[]> {
    return this.prisma.livro.findMany();
  }
  async getLivro(id: number): Promise<Livro | null> {
    return this.prisma.livro.findUnique({ where: { livro_isbn: Number(id) } });
  }
  async createLivro(data: Livro): Promise<Livro> {
    return this.prisma.livro.create({
      data,
    });
  }
  async updateLivro(id: number, data: Livro): Promise<Livro> {
    return this.prisma.livro.update({
      where: { livro_isbn: Number(id) },
      data: {
        livro_titulo: data.livro_titulo,
        livro_preco: data.livro_preco,
        livro_idioma: data.livro_idioma,
        livro_num_pags: data.livro_num_pags,
      },
    });
  }
  async deleteLivro(id: number): Promise<Livro> {
    return this.prisma.livro.delete({
      where: { livro_isbn: Number(id) },
    });
  }
}

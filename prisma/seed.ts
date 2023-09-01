import { PrismaService } from '../src/prisma.service';
import livros from './livros';

const prisma = new PrismaService();

(function seed() {
  livros.forEach(async (livro) => {
    await prisma.livro.create({
      data: {
        livro_isbn: livro.livro_isbn,
        livro_titulo: livro.livro_titulo,
        livro_preco: livro.livro_preco,
        livro_imagem: livro.livro_imagem,
      },
    });
  });
})();

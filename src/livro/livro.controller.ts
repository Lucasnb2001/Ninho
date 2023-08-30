import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivroService } from './livro.service';
import { Request, Response } from 'express';

@Controller('api/v1/Livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Get()
  async getAllLivro(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.livroService.getLivros();
    return response.status(200).json({
      status: 'Ok!',
      message: 'Successfully fetch data!',
      result: result,
    });
  }

  @Post()
  async postLivro(@Body() postData: Livro): Promise<Livro> {
    return this.livroService.createLivro(postData);
  }

  @Get(':id')
  async getLivro(@Param('id') id: number): Promise<Livro | null> {
    return this.livroService.getLivro(id);
  }

  @Delete(':id')
  async deleteLivro(@Param('id') id: number): Promise<Livro> {
    return this.livroService.deleteLivro(id);
  }

  @Put(':id')
  async updateLivro(
    @Param('id') id: number,
    @Body() data: Livro,
  ): Promise<Livro> {
    return this.livroService.updateLivro(id, data);
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppService } from './app.service';
import { CreateArticleDto } from './dto/article.dto';
import { CreateUserDto } from './dto/user.dto';
import { MyPipePipe } from './my-pipe.pipe';

@Controller()
export class AppController {
  private prisma: PrismaClient;
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient();
  }

  @Get('/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.article.findUnique({
      where: {
        id,
      },
    });
    // return this.appService.getHello();
  }

  @Post('/article')
  addArtilce(@Body() dto: CreateArticleDto) {
    return this.prisma.article.create({
      data: dto,
    });
  }

  @Post('/user')
  addUser(@Body() dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password,
      },
    });
  }
}

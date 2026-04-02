import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsController } from './review.controller';
import { ReviewsService } from './review.service';
import { Review } from './entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Review])],
  controllers: [BooksController, ReviewsController],
  providers: [BooksService, ReviewsService],
})
export class BooksModule {}

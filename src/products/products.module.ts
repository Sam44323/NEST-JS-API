import { Module } from '@nestjs/common';
import { ProductController } from './products.controllers';
import { ProductService } from './products.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

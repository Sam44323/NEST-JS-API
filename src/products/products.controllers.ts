import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prorPrice: number,
  ): any {
    return this.productsService.insertProduct(
      prodTitle,
      prodDescription,
      prorPrice,
    );
  }
}

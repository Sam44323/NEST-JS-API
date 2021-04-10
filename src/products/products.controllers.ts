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
    const genereated_product_id: string = this.productsService.insertProduct(
      prodTitle,
      prodDescription,
      prorPrice,
    );
    return { id: genereated_product_id };
  }
}

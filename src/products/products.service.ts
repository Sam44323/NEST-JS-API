import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = new Date().toISOString();
    const prod: Product = new Product(prodId, title, desc, price);
    this.products.push(prod);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
}

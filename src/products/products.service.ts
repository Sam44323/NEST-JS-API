import { Injectable, NotFoundException } from '@nestjs/common';
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

  getProduct(prodId: string) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException();
    }
    return { ...product };
  }

  updateProd(id: string, title: string, desc: string, price: number) {
    const prodIndex = this.products.findIndex((prod) => prod.id === id);
    if (prodIndex < 0) {
      throw new NotFoundException();
    }
    const product = this.products[prodIndex];
    if (title) {
      product.title = title;
    }
    if (desc) {
      product.desc = desc;
    }
    if (price) {
      product.price = price;
    }
    this.products[prodIndex] = product;
    return product;
  }
}

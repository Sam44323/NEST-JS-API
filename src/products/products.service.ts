import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    let prod: Product = new this.productModel({
      title,
      description: desc,
      price,
    });
    try {
      prod = await prod.save();
      return prod;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async getProducts() {
    try {
      const prods: Product[] = await this.productModel.find();
      return [...prods];
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async getProduct(prodId: string) {
    try {
      const prod: Product = await this.productModel.findById(prodId);
      return { ...prod };
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async updateProd(id: string, title: string, desc: string, price: number) {
    try {
      let product: Product = await this.productModel.findById(id);
      if (title) {
        product.title = title;
      }
      if (desc) {
        product.desc = desc;
      }
      if (price) {
        product.price = price;
      }
      product = await product.save();
      return { message: 'Updated the product', product };
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async deleteProduct(prodId: string) {
    try {
      await this.productModel.findByIdAndDelete(prodId);
      return { message: 'Deleted the product!' };
    } catch (error) {
      throw new NotFoundException();
    }
  }
}

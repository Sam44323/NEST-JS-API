import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  insertProduct(title: string, desc: string, price: number) {
    const prod: Product = new this.productModel({
      title,
      description: desc,
      price,
    });
    return prod
      .save()
      .then((prod) => prod)
      .catch(() => {
        throw new NotFoundException();
      });
  }

  getProducts() {
    return this.productModel
      .find()
      .then((prod) => prod)
      .catch(() => {
        throw new NotFoundException();
      });
  }

  getProduct(prodId: string) {
    return this.productModel
      .findById(prodId)
      .then((prod) => prod)
      .catch(() => {
        throw new NotFoundException();
      });
  }

  updateProd(id: string, title: string, desc: string, price: number) {
    return this.productModel
      .findById(id)
      .then((product) => {
        if (title) {
          product.title = title;
        }
        if (desc) {
          product.desc = desc;
        }
        if (price) {
          product.price = price;
        }
        return product.save();
      })
      .then(() => ({
        message: 'Updated the product',
      }))
      .catch(() => {
        throw new NotFoundException();
      });
  }
  deleteProduct(prodId: string) {
    return this.productModel
      .findByIdAndDelete(prodId)
      .then(() => ({ message: 'Deleted the product!' }))
      .catch(() => {
        throw new NotFoundException();
      });
  }
}

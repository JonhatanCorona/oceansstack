import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepo: Repository<Order>,
    @InjectRepository(Product)
    private productsRepo: Repository<Product>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepo.find({ relations: ['products'] });
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
  const products: Product[] = [];
  let total = 0;

  for (const p of createOrderDto.products) {
    const product = await this.productsRepo.findOneBy({ id: p.id });
    if (product) {
      products.push(product);
      total += Number(product.price);
    }
  }

  const order = this.ordersRepo.create({ products, total });
  return this.ordersRepo.save(order);
}
}

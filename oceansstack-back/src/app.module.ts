import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { Product } from './modules/products/entities/product.entity';
import { Order } from './modules/orders/entities/order.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Product, Order],
      synchronize: true, // SOLO desarrollo
      logging: false,

      // 🔐 Render requiere SSL
      ssl: {
        rejectUnauthorized: false,
      },
    }),

    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}


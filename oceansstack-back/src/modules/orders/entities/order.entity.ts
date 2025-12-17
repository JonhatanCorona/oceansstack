import { Product } from 'src/modules/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order {
  @ApiProperty({ example: 1, description: 'ID de la orden' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: () => [Product], description: 'Productos incluidos en la orden' })
  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @ApiProperty({ example: 12.5, description: 'Total de la orden' })
  @Column('decimal')
  total: number;

  @ApiProperty({ example: '2025-12-17T15:30:00.000Z', description: 'Fecha de creación de la orden' })
  @CreateDateColumn()
  createdAt: Date;
}

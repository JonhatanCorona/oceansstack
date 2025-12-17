import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
  @ApiProperty({ example: 1, description: 'ID del producto' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Pizza Margarita', description: 'Nombre del producto' })
  @Column()
  name: string;

  @ApiProperty({ example: 12.5, description: 'Precio del producto' })
  @Column('decimal')
  price: number;
}
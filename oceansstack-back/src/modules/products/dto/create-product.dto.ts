import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Pizza Margarita', description: 'Nombre del producto' })
  name: string;

  @ApiProperty({ example: 12.5, description: 'Precio del producto' })
  price: number;
}

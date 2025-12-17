import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Lista de productos por ID para crear la orden',
    type: [Object],
    example: [{ id: 1 }, { id: 2 }],
  })
  products: { id: number }[];
}

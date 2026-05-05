import {IsInt,IsArray,IsNotEmpty,ValidateNested, IsOptional} from 'class-validator';
import { Type } from 'class-transformer';
class OrderItemDto{
  @IsInt()
  @IsNotEmpty()
  menuId!:number;

  @IsInt()
  @IsNotEmpty()
  quantity!:number;
}

export class CreateOrderDto{
  @IsInt()
  @IsNotEmpty()
  userId!: number;

  @IsArray()
  @ValidateNested({each: true})
  @Type(()=>OrderItemDto)
  @IsOptional()
  items?:OrderItemDto[];
}
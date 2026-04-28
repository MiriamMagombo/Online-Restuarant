import {IsEnum,IsNotEmpty} from 'class-validator';
export enum OrderStatus{
  PENDING='Pending',
  OUT_FOR_DELIVERY='Out for Delivery',
  DELIVERED='Delivered',
  CANCELLED='Cancelled',
}
export class UpdateOrderStatusDto{
  @IsEnum(OrderStatus)
  @IsNotEmpty()
  status?:OrderStatus;
}
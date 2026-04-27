import { Controller ,Body, Get, Param, Post, Patch, Put, Delete} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto.ts';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { AddItemToOrderDto } from './dto/add-item-to-order.dto.ts';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

    @Get()
    findAll(){
      return this.ordersService.findAll();
    
  }
   @Get(':id')
    findOne(@Param('id') id: number){
      return this.ordersService.findOne(id);
    }
    @Post()
    async create(@Body() createOrderDto: CreateOrderDto){
      return this.ordersService.create(createOrderDto);
    }
    
    @Patch(':id/status')
    updateStatus(@Param('id') id: number, @Body() dto: UpdateOrderStatusDto){
      return this.ordersService.updateStatus(id, dto);
    }
    @Post(':id/items')
    addItemToOrder(@Param('id') id: number, @Body() dto: AddItemToOrderDto){
      return this.ordersService.addItemToOrder(id, dto);
    }

    @Put(':id/deliver')
    markDeliveredByQr(@Param('id') id: number, @Body() qrCode: string){
      return this.ordersService.markDeliveredByQr(qrCode);
    }

    @Delete(':id/items/:itemId')
    removeItemFromOrder(@Param('id') id: number, @Param('itemId') itemId: number){
      return this.ordersService.removeItemFromOrder(id, itemId);
    }
}

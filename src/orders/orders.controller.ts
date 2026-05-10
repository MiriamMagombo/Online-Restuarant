import { Controller ,Body, Get, Param, Post, Patch, Put, Delete, ParseIntPipe, Res, NotFoundException} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { AddItemToOrderDto } from './dto/add-item-to-order.dto';
import type{ Response } from 'express';
import * as QRCode from 'qrcode';


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

    @Put('deliver')
    markDeliveredByQr(@Body ('qrcode') qrCode: string){
      return this.ordersService.markDeliveredByQr(qrCode);
    }

    @Delete(':id/items/:itemId')
    async removeItemFromOrder(@Param('id') id: number, @Param('itemId', ParseIntPipe) itemId: number){
      return this.ordersService.removeItemFromOrder(id, itemId);
    }

    @Get(':id/qr')
  async getOrderQrImage(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response
  ) {
    const order = await this.ordersService.findOne(id);
    
    if (!order.qrCode) {
      throw new NotFoundException('QR code not found for this order');
    }
     // Generate QR code as PNG buffer
    const qrImageBuffer = await QRCode.toBuffer(order.qrCode, {
      type: 'png',
      width: 300,
      margin: 2
    });

    res.setHeader('Content-Type', 'image/png');
    res.send(qrImageBuffer);
  }
}


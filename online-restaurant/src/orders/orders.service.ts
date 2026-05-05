import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';           
import { OrderItem } from './entities/order-item.entity';  
import { CreateOrderDto } from './dto/create-order.dto';   
import { UpdateOrderStatusDto, OrderStatus } from './dto/update-order-status.dto';
import { AddItemToOrderDto } from './dto/add-item-to-order.dto';
import { randomUUID } from  'crypto';
import * as QRCode from 'qrcode';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(OrderItem)
        private readonly orderItemRepository: Repository<OrderItem>
    ){}

    findAll(): Promise<Order[]>{
        return this.orderRepository.find(({ relations: ['items'] }));
    }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const order = this.orderRepository.create({
            user: {id:createOrderDto.userId},
            status: OrderStatus.PENDING,
            startTime: new Date(),
            qrCode: this.generatedQrCode(),
            estimatedArrival: new Date(), 
        });

        const savedOrder = await this.orderRepository.save(order);

        if(createOrderDto.items && createOrderDto.items.length > 0){
            const items = createOrderDto.items.map(item => this.orderItemRepository.create({
                order: savedOrder,
                menuItem: { id: item.menuId },
                quantity: item.quantity,
            })
        );
        await this.orderItemRepository.save(items);
        }
        return this.findOne(savedOrder.id);
    }
    async findOne(id: number): Promise<Order>{
        const order = await this.orderRepository.findOne({
            where: { id },
            relations: ['items', 'items.menuItem'],
        });
        if (!order) throw new NotFoundException('order ${id} not  found');
        return order;
    }
  
    async updateStatus(id: number, dto: UpdateOrderStatusDto): Promise<Order>{
        const order = await this.findOne(id);

       if(dto.status)
        { order.status = dto.status;}

        if (dto.status === 'Out for Delivery'){
            const now = new Date();
            const timeElapsed = now.getTime() - order.startTime.getTime();
            const estimatedTotalMs = 30 * 60 * 1000;
            order.estimatedArrival = new Date(order.startTime.getTime() + estimatedTotalMs);
        }
        return this.orderRepository.save(order);
    }
    async addItemToOrder(id: number, dto: AddItemToOrderDto): Promise<Order>{
        const order = await this .findOne(id);
        if(order.status !== 'Pending'){
            throw new BadRequestException('Can only add items to pending orders');
        }

        const item = this.orderItemRepository.create({
            order:{id},
            menuItem: { id: dto.menuId },
            quantity: dto.quantity,
        });
        await this.orderItemRepository.save(item);

        return this.findOne(id);
    }
    async markDeliveredByQr(scannedQr: string): Promise<Order>{
        const order = await this.orderRepository.findOne({where: {qrCode: scannedQr} });
        
        if (!order) {
            throw new BadRequestException('QR code does not match any order');
        }
        if(order.status === 'Delivered'){
            throw new BadRequestException('Order already delivered');
        }
        order.status =OrderStatus.DELIVERED;
        order.deliveredAt = new Date();
        return this.orderRepository.save(order);
    }
    private generatedQrCode(): string{
        return `ORD-${randomUUID()}`;
    }

    async removeItemFromOrder(orderId: number, itemId: number): Promise<Order>{
        const order = await this.findOne(orderId);
        const item = order.items.find(i => i.id === itemId);
        if (!item) {
            throw new BadRequestException('Item not found in order');
        }
        await this.orderItemRepository.remove(item);
        return this.findOne(orderId);
    }
}

import { Repository } from 'typeorm';
import { Order } from './entities/order.entity.ts';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderDto } from './dto/create-order.dto.ts';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { AddItemToOrderDto } from './dto/add-item-to-order.dto';
export declare class OrdersService {
    private readonly orderRepository;
    private readonly orderItemRepository;
    constructor(orderRepository: Repository<Order>, orderItemRepository: Repository<OrderItem>);
    findAll(): Repository<Order>;
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findOne(id: number): Promise<Order>;
    updateStatus(id: number, dto: UpdateOrderStatusDto): Promise<Order>;
    addItemToOrder(id: number, dto: AddItemToOrderDto): Promise<Order>;
    markDeliveredByQr(scannedQr: string): Promise<Order>;
    private generatedQrCode;
}

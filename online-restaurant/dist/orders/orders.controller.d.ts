import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { AddItemToOrderDto } from './dto/add-item-to-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Repository<Order>;
    findOne(id: number): Promise<Order>;
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    updateStatus(id: number, dto: UpdateOrderStatusDto): Promise<Order>;
    addItemToOrder(id: number, dto: AddItemToOrderDto): Promise<Order>;
    markDeliveredByQr(id: number, qrCode: string): Promise<Order>;
    removeItemFromOrder(id: number, itemId: number): any;
}

import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { AddItemToOrderDto } from './dto/add-item-to-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): import("typeorm").Repository<import("./entities/order.entity").Order>;
    findOne(id: number): Promise<import("./entities/order.entity").Order>;
    create(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").Order>;
    updateStatus(id: number, dto: UpdateOrderStatusDto): Promise<import("./entities/order.entity").Order>;
    addItemToOrder(id: number, dto: AddItemToOrderDto): Promise<import("./entities/order.entity").Order>;
    markDeliveredByQr(id: number, qrCode: string): Promise<import("./entities/order.entity").Order>;
    removeItemFromOrder(id: number, itemId: number): Promise<import("./entities/order.entity").Order>;
}

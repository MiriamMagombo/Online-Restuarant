import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { AddItemToOrderDto } from './dto/add-item-to-order.dto';
import type { Response } from 'express';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: number): Promise<import("./entities/order.entity").Order>;
    create(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").Order>;
    updateStatus(id: number, dto: UpdateOrderStatusDto): Promise<import("./entities/order.entity").Order>;
    addItemToOrder(id: number, dto: AddItemToOrderDto): Promise<import("./entities/order.entity").Order>;
    markDeliveredByQr(qrCode: string): Promise<import("./entities/order.entity").Order>;
    removeItemFromOrder(id: number, itemId: number): Promise<import("./entities/order.entity").Order>;
    getOrderQrImage(id: number, res: Response): Promise<void>;
}

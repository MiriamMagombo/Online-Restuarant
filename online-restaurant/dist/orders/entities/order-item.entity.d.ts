import { Order } from './order.entity';
export declare class OrderItem {
    id: number;
    orderId: number;
    menuId: number;
    quantity: number;
    order: Order;
}

import { OrderItem } from '../../orders/entities/order-item.entity';
export declare class Menu {
    id: number;
    name: string;
    price: number;
    description?: string;
    orderItems: OrderItem[];
}

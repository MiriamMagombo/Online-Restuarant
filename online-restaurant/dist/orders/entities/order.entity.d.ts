import { OrderItem } from './order-item.entity';
import { OrderStatus } from '../dto/update-order-status.dto';
export declare class Order {
    id: number;
    status: OrderStatus;
    userId: number;
    startTime: Date;
    qrCode: string;
    estimatedArrival: Date;
    deliveredAt: Date;
    items: OrderItem[];
}

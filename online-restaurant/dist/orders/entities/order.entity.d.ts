import { OrderItem } from './order-item.entity';
import { User } from '../../users/entities/user.entity';
export declare enum OrderStatus {
    PENDING = "Pending",
    OUT_FOR_DELIVERY = "Out for Delivery",
    DELIVERED = "Delivered",
    CANCELLED = "Cancelled"
}
export declare class Order {
    id: number;
    status: OrderStatus;
    userId: number;
    startTime: Date;
    qrCode: string;
    estimatedArrival: Date;
    deliveredAt: Date;
    user: User;
    items: OrderItem[];
}

import { OrderItem } from './order-item.entity';
export declare enum OrderStatus {
    PENDING = "Pending",
    OUT_FOR_DELIVERY = "Out for Delivery",
    DELIVERED = "Delivered",
    CANCELLED = "Cancelled"
}
export declare class Order {
    id: number;
    status: OrderStatus;
    startTime: Date;
    qrCode: string;
    estimatedArrival: Date;
    deliveredAt: Date;
    items: OrderItem[];
}

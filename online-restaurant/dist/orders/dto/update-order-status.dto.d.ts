export declare enum OrderStatus {
    PENDING = "Pending",
    OUT_FOR_DELIVERY = "Out for Delivery",
    DELIVERED = "Delivered",
    CANCELLED = "Cancelled"
}
export declare class UpdateOrderStatusDto {
    status: OrderStatus;
}

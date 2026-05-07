declare class OrderItemDto {
    menuId: number;
    quantity: number;
}
export declare class CreateOrderDto {
    userId: number;
    items?: OrderItemDto[];
}
export {};

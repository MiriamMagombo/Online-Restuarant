declare class OrderItemDto {
    menuId: number;
    quantity: number;
}
export declare class CreateOrderDto {
    items?: OrderItemDto[];
}
export {};

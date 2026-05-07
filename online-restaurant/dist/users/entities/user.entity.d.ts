import { Order } from '../../orders/entities/order.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    orders: Order[];
}

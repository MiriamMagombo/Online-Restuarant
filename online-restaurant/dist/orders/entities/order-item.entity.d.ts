import { Order } from './order.entity';
import { Menu } from "../../menu/entities/menu.entity";
export declare class OrderItem {
    id: number;
    quantity: number;
    order: Order;
    menuItem: Menu;
}

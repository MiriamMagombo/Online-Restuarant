import{Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import{Order} from './order.entity';
import { Menu } from 'src/menu/entities/menu.entity';

@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn()
    id!: number;

    //@Column()
    //orderId!: number;

    //@Column()
    //menuId!: number;

    @Column()
    quantity!: number;
    // Replace with these relations:
   @ManyToOne(() => Order, (order) => order.items)
   order!: Order;

  @ManyToOne(() => Menu, (menu) => menu.orderItems)
   menuItem!: Menu;

}
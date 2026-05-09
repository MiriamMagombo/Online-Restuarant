import{Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import{Order} from './order.entity';
import { Menu } from '../../menu/entities/menu.entity';

@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    orderId!: number;

    @Column()
    menuId!: number;

    @Column()
    quantity!: number;
    // Replace with these relations:
   @ManyToOne(() => Order, (order) => order.items)
    @JoinColumn({ name: 'orderId' })
   order!: Order;

  @ManyToOne(() => Menu, (menu) => menu.orderItems)
    @JoinColumn({ name: 'menuId' })
   menuItem!: Menu;

}
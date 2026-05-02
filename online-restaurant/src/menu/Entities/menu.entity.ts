import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from '../../orders/entities/order-item.entity';


@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => OrderItem, orderItem => orderItem.menuItem)
  orderItems!: OrderItem[];
}

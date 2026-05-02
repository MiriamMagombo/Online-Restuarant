import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { OrderItem } from './order-item.entity';
//import { OrderStatus } from '../dto/update-order-status.dto';
import { User } from '../../users/entities/user.entity';

export enum OrderStatus {
  PENDING='Pending',
  OUT_FOR_DELIVERY='Out for Delivery',
  DELIVERED='Delivered',
  CANCELLED='Cancelled'
}

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id!: number;


    @Column({
      type: 'varchar',
      length: 20,
      default: OrderStatus.PENDING
    })
    status!: OrderStatus;

    @Column()
    userId!: number;


    @Column({type: 'timestamp',default: ()=> 'CURRENT_TIMESTAMP'})
    startTime!: Date;

    @Column({ unique: true})
    qrCode!: string;

    @Column({ nullable: true})
    estimatedArrival!: Date;

    @Column({nullable: true})
    deliveredAt!: Date;

    @ManyToOne(()=> User, (user) => user.orders)
    user!: User;

    @OneToMany(() => OrderItem, (item) => item.order,{ cascade: true })
    items!: OrderItem[]
}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './order-item.entity';
import { OrderStatus } from '../dto/update-order-status.dto';

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id!: number;


    @Column({
      type: 'enum',
      enum: OrderStatus,
      default: OrderStatus.PENDING
    })
    status!: OrderStatus;

    @Column()
    userId!: number;


    @Column({default: 'pending'})
    startTime!: Date;

    @Column({ unique: true})
    qrCode!: string;

    @Column({ nullable: true})
    estimatedArrival!: Date;

    @Column({nullable: true})
    deliveredAt!: Date;

    @OneToMany(() => OrderItem, item => item.order)
    items!: OrderItem[]
}
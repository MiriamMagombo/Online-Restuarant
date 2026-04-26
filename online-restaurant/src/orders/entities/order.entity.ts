import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: number;

    @Column()
    status!: string;

    @Column()
    startTime!: Date;

    @Column({ unique: true })
    qrCode!: string;

    @Column({ nullable: true })
    estimatedArrival!: Date;

    @Column({ nullable: true })
    deliveredAt!: Date;

    @OneToMany(() => OrderItem, item => item.order)
    items!: OrderItem[];
}
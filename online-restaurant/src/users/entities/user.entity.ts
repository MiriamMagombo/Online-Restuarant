import { Order } from '../../orders/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    firtsName!: string;

    @Column()
    lasName!: string;

    @OneToMany(() => Order, (order) => order.user)
    orders!: Order[];
}
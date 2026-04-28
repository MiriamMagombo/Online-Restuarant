export class UpdateOrderStatusDto{
    status!: 'Pending' | 'preparing' | 'Out for Delivery' | 'Delivery';
}
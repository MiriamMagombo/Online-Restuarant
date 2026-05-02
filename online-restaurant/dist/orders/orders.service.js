"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const order_item_entity_1 = require("./entities/order-item.entity");
const update_order_status_dto_1 = require("./dto/update-order-status.dto");
let OrdersService = class OrdersService {
    orderRepository;
    orderItemRepository;
    constructor(orderRepository, orderItemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }
    findAll() {
        return this.orderRepository.find(({ relations: ['items'] }));
    }
    async create(createOrderDto) {
        const order = this.orderRepository.create({
            userId: createOrderDto.userId,
            status: 'Pending',
            startTime: new Date(),
            qrCode: this.generatedQrCode(),
            estimatedArrival: null,
        });
        const savedOrder = await this.orderRepository.save(order);
        if (createOrderDto.items && createOrderDto.items.length > 0) {
            const items = createOrderDto.items.map(item => this.orderItemRepository.create({
                orderId: savedOrder.id,
                menuId: item.menuId,
                quantity: item.quantity,
            }));
            await this.orderItemRepository.save(items);
        }
        return this.findOne(savedOrder.id);
    }
    async findOne(id) {
        const order = await this.orderRepository.findOne({
            where: { id },
            relations: ['items', 'items.menu'],
        });
        if (!order)
            throw new common_1.NotFoundException('order ${id} not  found');
        return order;
    }
    async updateStatus(id, dto) {
        const order = await this.findOne(id);
        order.status = dto.status;
        if (dto.status === 'Out for Delivery') {
            const now = new Date();
            const timeElapsed = now.getTime() - order.startTime.getTime();
            const estimatedTotalMs = 30 * 60 * 1000;
            order.estimatedArrival = new Date(order.startTime.getTime() + estimatedTotalMs);
        }
        return this.orderRepository.save(order);
    }
    async addItemToOrder(id, dto) {
        const order = await this.findOne(id);
        if (order.status !== 'Pending') {
            throw new common_1.BadRequestException('Can only add items to pending orders');
        }
        const item = this.orderItemRepository.create({
            orderId: id,
            menuId: dto.menuId,
            quantity: dto.quantity,
        });
        await this.orderItemRepository.save(item);
        return this.findOne(id);
    }
    async markDeliveredByQr(scannedQr) {
        const order = await this.orderRepository.findOne({ where: { qrCode: scannedQr } });
        if (!order) {
            throw new common_1.BadRequestException('QR code does not match any order');
        }
        if (order.status === 'Delivered') {
            throw new common_1.BadRequestException('Order already delivered');
        }
        order.status = update_order_status_dto_1.OrderStatus.DELIVERED;
        order.deliveredAt = new Date();
        return this.orderRepository.save(order);
    }
    generatedQrCode() {
        return 'ORD-${Date.now()}-${Math.random().toString(36).substring(2, 9)}';
    }
    async removeItemFromOrder(orderId, itemId) {
        const order = await this.findOne(orderId);
        const item = order.items.find(i => i.id === itemId);
        if (!item) {
            throw new common_1.BadRequestException('Item not found in order');
        }
        await this.orderItemRepository.remove(item);
        return this.findOne(orderId);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map
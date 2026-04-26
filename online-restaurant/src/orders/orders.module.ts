import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UsersController } from './orders.controller';

@Module({
  providers: [OrdersService],
  controllers: [UsersController]
})
export class UsersModule {}

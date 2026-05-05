import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { User } from './users/entities/user.entity';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item.entity';
import { Menu } from './menu/entities/menu.entity';
import { MenuModule } from './menu/menu.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRootAsync({ 
      imports: [ConfigModule], 
      inject: [ConfigService], 
      useFactory: (config: ConfigService) => ({ 
        type: 'oracle', 
        host: config.get('DB_HOST'), 
        port: parseInt(config.get<string>('DB_PORT', '1521')),
        username: config.get('DB_USERNAME'), 
        password: config.get('DB_PASSWORD'), 
        serviceName: config.get('DB_SERVICE_NAME'), 
        synchronize: config.get('DB_SYNCHRONIZE') === 'true', 
        entities: [Menu, Order, OrderItem], 
        logging: true, 
      }), 
    }),
MenuModule, OrdersModule, AuthModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}

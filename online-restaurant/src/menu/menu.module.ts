export class MenuModule {}
import { Module } from '@nestjs/common';
import {MenuService} from './menu.service';
import { MenuController } from './owner.controller';
import {Menu} from './entities/menu.entity';
import { OwnerModule } from './owner.module';
import { OwnerController } from './owner.controller';

@Module({
    imports : [TypeOrmModule.forFeature([Menu]), OwnerModule],
    providers:[MenuService],
    controllers: [MenuController, OwnerController]
})
export class OwnerModule {}

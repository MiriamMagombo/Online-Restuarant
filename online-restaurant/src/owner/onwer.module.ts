import { Module } from '@nestjs/common';
import {MenuService} from './menu.service';
import { MenuController } from './onwer.controller';

@Module({
    providers:[MenuService],
    controllers: [MenuController]
})
export class OwnerModule {}

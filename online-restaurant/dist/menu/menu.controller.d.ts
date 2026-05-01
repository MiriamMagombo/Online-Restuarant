import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(createMenuDto: CreateMenuDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateMenuDto: UpdateMenuDto): any;
    remove(id: string): any;
}

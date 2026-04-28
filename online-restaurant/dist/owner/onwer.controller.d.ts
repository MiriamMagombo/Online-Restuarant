import { MenuService } from './menuService';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    postMenu(): string;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateMenu: any): any;
    remove(id: string): any;
}

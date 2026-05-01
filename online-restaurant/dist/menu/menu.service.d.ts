export interface MenuItem {
    id: number;
    name: string;
    price: number;
    description?: string;
}
export declare class MenuService {
    private menu;
    private nextId;
    getMenu(): MenuItem[];
    getMenuItem(id: number): MenuItem;
    createMenuItem(item: Omit<MenuItem, 'id'>): MenuItem;
    deleteMenuItem(id: number): {
        message: string;
    };
    patchMenuItem(id: number, updates: Partial<MenuItem>): MenuItem;
}
export declare class OwnerService {
}

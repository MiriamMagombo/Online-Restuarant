"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerService = exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
let MenuService = class MenuService {
    menu = [];
    nextId = 1;
    getMenu() {
        return this.menu;
    }
    getMenuItem(id) {
        const item = this.menu.find(m => m.id === id);
        if (!item) {
            throw new common_1.NotFoundException('Menu item not found');
        }
        return item;
    }
    createMenuItem(item) {
        const newItem = { id: this.nextId++, ...item };
        this.menu.push(newItem);
        return newItem;
    }
    deleteMenuItem(id) {
        const index = this.menu.findIndex(m => m.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Menu item not found');
        }
        this.menu.splice(index, 1);
        return { message: 'Menu item deleted successfully' };
    }
    patchMenuItem(id, updates) {
        const item = this.getMenuItem(id);
        const updatedItem = { ...item, ...updates };
        const index = this.menu.findIndex(m => m.id === id);
        this.menu[index] = updatedItem;
        return updatedItem;
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)()
], MenuService);
let OwnerService = class OwnerService {
};
exports.OwnerService = OwnerService;
exports.OwnerService = OwnerService = __decorate([
    (0, common_1.Injectable)()
], OwnerService);
//# sourceMappingURL=owner.service.js.map
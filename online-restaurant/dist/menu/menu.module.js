"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerModule = exports.MenuModule = void 0;
class MenuModule {
}
exports.MenuModule = MenuModule;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("./menu.service");
const owner_controller_1 = require("./owner.controller");
const menu_entity_1 = require("./entities/menu.entity");
const owner_module_1 = require("./owner.module");
Object.defineProperty(exports, "OwnerModule", { enumerable: true, get: function () { return owner_module_1.OwnerModule; } });
const owner_controller_2 = require("./owner.controller");
let OwnerModule = class OwnerModule {
};
exports.OwnerModule = OwnerModule;
exports.OwnerModule = owner_module_1.OwnerModule = __decorate([
    (0, common_1.Module)({
        imports: [TypeOrmModule.forFeature([menu_entity_1.Menu]), owner_module_1.OwnerModule],
        providers: [menu_service_1.MenuService],
        controllers: [owner_controller_1.MenuController, owner_controller_2.OwnerController]
    })
], owner_module_1.OwnerModule);
//# sourceMappingURL=menu.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_menu_dto_1 = require("./create-menu.dto");
class UpdateBookDto extends (0, mapped_types_1.PartialType)(create_menu_dto_1.CreateMenuDto) {
}
exports.UpdateBookDto = UpdateBookDto;
//# sourceMappingURL=update-Menu.dto.js.map
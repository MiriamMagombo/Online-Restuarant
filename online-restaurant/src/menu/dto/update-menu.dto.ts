import { PartialType } from '@nestjs/mapped-types'; 
import { CreateMenuDto } from './create-menu.dto'; 
export class UpdateBookDto extends PartialType(CreateMenuDto) {}

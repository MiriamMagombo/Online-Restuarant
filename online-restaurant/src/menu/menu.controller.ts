import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { MenuService } from './menuService';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  // POST /menu — create a new menu
  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  // GET /menu — get all menu items
  @Get() 
  findAll() { 
    return this.menuService.findAll(); 
  } 
   
  // GET /menu/:id — get one menu
  @Get(':id') 
  findOne(@Param('id') id: string) { 
    return this.menuService.findOne(+id); 
  } 
   
  // PATCH /menu/:id — update a menu
  @Patch(':id') 
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) { 
    return this.menuService.update(+id, updateMenuDto); 
  } 
   
  // DELETE /menu/:id — delete a menu 
  @Delete(':id') 
  remove(@Param('id') id: string) { 
    return this.menuService.remove(+id);
  }
}
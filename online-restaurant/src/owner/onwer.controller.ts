import { Controller,Get,Post,Patch,Delete,Param,Body } from '@nestjs/common';
import { MenuService} from './menuService';

@Controller('menu') 
export class MenuController { 
  constructor(private readonly menuService: MenuService) {}

  // POST /menu — create a new menu 
  @Post() 
  postMenu():string { 
    return this.menuService.postMenu();
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
  update(
    @Param('id')id:string,
    @Body() updateMenu :any
  ) { 
    return this.menuService.update(+id, updateMenu); 
  } 
   
  // DELETE /menu/:id — delete a menu 
  @Delete(':id') 
  remove(@Param('id') id: string) { 
    return this.menuService.remove(+id);
  }
}
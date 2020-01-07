import { Controller, Get, Post, Body, Delete, Put, UseGuards, Param, Logger } from '@nestjs/common';
import { ItemsService } from './items.service';
import { AuthGuard } from '@nestjs/passport';
// import { Item } from '@goodfaith/data';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/createItemDto';

@Controller('items')
export class ItemsController {
    private logger = new Logger('ItemsController')
    constructor(private itemsService: ItemsService){}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<Item> {
        return this.itemsService.find(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createItem(@Body() createTaskDto: CreateItemDto): Promise<Item> {
       return this.itemsService.createItem(createTaskDto);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Put()
    update(@Body('item') item: Item) {
        this.itemsService.update(item);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    delete(@Param('id') id: number) {
        this.itemsService.delete(id);
    }
}

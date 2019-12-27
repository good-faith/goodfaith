import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '@goodfaith/data';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Post()
    async create(@Body() item: Item) {
        return 'Not yet implemented';
    }
}

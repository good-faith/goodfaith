import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from '@goodfaith/data';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}

    @Get()
    async findAll(): Promise<Items[]> {
        return this.itemsService.findAll();
    }

    @Post()
    async create(@Body() item: Items) {
        return 'Not yet implemented';
    }
}

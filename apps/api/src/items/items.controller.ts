import { Controller, Get, Post, Body, Delete, Put, UseGuards, Param, Logger } from '@nestjs/common';
import { ItemsService } from './items.service';
import { AuthGuard } from '@nestjs/passport';
// import { Item } from '@goodfaith/data';
import { ItemEntity } from './item.entity';

@Controller('items')
export class ItemsController {
    private logger = new Logger('ItemsController')
    constructor(private readonly itemsService: ItemsService){}

    @Get()
    async findAll(): Promise<ItemEntity[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<ItemEntity> {
        return this.itemsService.find(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body('item') item: ItemEntity) {
        this.itemsService.create(item);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    update(@Body('item') item: ItemEntity) {
        this.itemsService.update(item);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    delete(@Param('id') id: number) {
        this.itemsService.delete(id);
    }
}

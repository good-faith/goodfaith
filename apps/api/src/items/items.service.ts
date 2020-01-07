import { Injectable } from '@nestjs/common';
//import { Item } from '@goodfaith/data'
import { Item } from './item.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateItemDto } from './dto/createItemDto'

type TaskUpdate = Pick<Item, 'id'>

@Injectable()
export class ItemsService {
   constructor(
     @InjectRepository(Item) 
     private itemsRepository: Repository<Item>
     ){} 
  // private readonly items: Item[] = [];

  async findAll(): Promise<Item[]> {
    const items = await this.itemsRepository.find()
    return items
  }

  find(id: number) {
    const record: Item = this.itemsRepository.find[id];

    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updateItem: TaskUpdate): Promise<Item> {
    if (this.itemsRepository[updateItem.id]) {
      this.itemsRepository[updateItem.id] = updateItem;
      return;
    }

    throw new Error('No record found to update');
  }

  async delete(id: number): Promise<DeleteResult> {
    const record = await this.itemsRepository.delete[id];

    if (record) {
      delete this.itemsRepository[id];
      return;
    }

    return record
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { name } = createItemDto;

    const item = new Item();
    item.name = name
    await item.save();

    return item;
  }
}

// {"id": 1,"name":'Pizza'}, {"id": 2,"item":'Coke'}
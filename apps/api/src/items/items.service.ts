import { Injectable } from '@nestjs/common';
//import { Item } from '@goodfaith/data'
import { ItemEntity } from './item.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
   constructor(
     @InjectRepository(ItemEntity) 
     private itemsRepository: Repository<ItemEntity>
     ){} 
  // private readonly items: Item[] = [];

  async findAll(): Promise<ItemEntity[]> {
    const items = await this.itemsRepository.find()
    return items
  }

  find(id: number): ItemEntity {
    const record: ItemEntity = this.itemsRepository.find[id];

    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updatedItem: ItemEntity) {
    if (this.itemsRepository[updatedItem.id]) {
      this.itemsRepository[updatedItem.id] = updatedItem;
      return;
    }

    throw new Error('No record found to update');
  }

  delete(id: number) {
    const record: ItemEntity = this.itemsRepository[id];

    if (record) {
      delete this.itemsRepository[id];
      return;
    }

  }

  create(item: ItemEntity) {
    const id = new Date().valueOf();
    this.itemsRepository[id] = {
      ...item,
      id,
    };
  }
}

// {"id": 1,"name":'Pizza'}, {"id": 2,"item":'Coke'}
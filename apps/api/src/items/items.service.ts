import { Injectable } from '@nestjs/common';
//import { Item } from '@goodfaith/data'
import { ItemEntity } from './item.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

type TaskUpdate = Pick<ItemEntity, 'id'>

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

  find(id: number) {
    const record: ItemEntity = this.itemsRepository.find[id];

    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updateItem: TaskUpdate): Promise<ItemEntity> {
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

  create(item: ItemEntity) {
    const id = new Date().valueOf();
    this.itemsRepository[id] = {
      ...item,
      id,
    };
  }
}

// {"id": 1,"name":'Pizza'}, {"id": 2,"item":'Coke'}
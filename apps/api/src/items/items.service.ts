import { Injectable } from '@nestjs/common';
import { Item } from '@goodfaith/data'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  create(item: Item) {
    this.items.push(item);
  }
}

// {"id": 1,"name":'Pizza'}, {"id": 2,"item":'Coke'}
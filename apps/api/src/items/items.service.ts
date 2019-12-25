import { Injectable } from '@nestjs/common';
import { Items } from '@goodfaith/data'

@Injectable()
export class ItemsService {
    private readonly items: Items[] = [{"id": 1,"item":'Pizza'}, {"id": 2,"item":'Coke'}];

  findAll(): Items[] {
    return this.items;
  }

  create(item: Items) {
    this.items.push(item);
  }
}

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TaskModule } from '../task/task.module'
import { ItemsModule } from '../items/items.module'

@Module({
  imports: [
    TaskModule,
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

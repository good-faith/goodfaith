import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config'

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { TaskModule } from '../tasks/task.module'
import { ItemsModule } from '../items/items.module'
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TaskModule,
    ItemsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

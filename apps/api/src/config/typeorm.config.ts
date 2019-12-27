// import { User } from './../auth/user.entity';
// import { Task } from './../task/task-entity';
import { Item } from '../items/item.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as config from 'config';
import * as dotenv from 'dotenv';

// const dbConfig = config.get('db');
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'goodfaith-graphql.postgres.database.azure.com',
    port: 5432, 
    username: 'goodgod@goodfaith-graphql',
    database: 'auth-o', 
    password: 'qwerty123!',
    ssl: true,
    entities: [Item],
    synchronize: true 
};

// export const typeOrmConfig: TypeOrmModuleOptions = {
//     type: dbConfig.type,
//     host: dbConfig.host,
//     port: dbConfig.port,
//     username: dbConfig.username,
//     database: dbConfig.database,
//     password: dbConfig.password,
//     ssl: dbConfig.ssl,
//     entities: [Item],
//     synchronize: dbConfig.synchronize,
// };
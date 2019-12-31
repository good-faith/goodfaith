// import { User } from './../auth/user.entity';
// import { Task } from './../task/task-entity';
import { ItemEntity } from '../items/item.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as config from 'config';
import * as dotenv from 'dotenv';

// const dbConfig = config.get('db');
dotenv.config();



export const typeOrmConfig: TypeOrmModuleOptions = {
    type: process.env.DB_TYPE as any, 
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT as unknown as number, 
    username: process.env.PGSQL_USERNAME,
    database: process.env.PGSQL_DB_NAME, 
    password: process.env.PGSQL_PASSWORD,
    ssl: process.env.PGSQL_SSL,
    entities: [ItemEntity],
    synchronize: process.env.PGSQL_SYNC as unknown as boolean
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
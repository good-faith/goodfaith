import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';



@Entity('item')
export class Item extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column()
    name: string;
}


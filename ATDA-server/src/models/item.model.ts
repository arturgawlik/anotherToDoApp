import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    done: boolean;

    @Column()
    addDate: Date;

    @Column()
    doneDate: Date;
}

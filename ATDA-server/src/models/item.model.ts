import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    done: boolean;

    @Column()
    addDate: Date;

    @Column({nullable: true})
    doneDate: Date;

    @Column()
    userIdentyfier: string;
}

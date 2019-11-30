import { Injectable } from '@nestjs/common';
import { Item } from 'src/models/item.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {

    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {
    }

    getAllByUserIdentyfier(userIdentyfier: string): Promise<Item[]> {
        return this.itemRepository.createQueryBuilder()
            .where(`item.userIdentyfier = '${userIdentyfier}'`)
            .orderBy('id', 'DESC')
            .getMany();
    }

    addItem(item: Item) {
        return this.itemRepository.save(item);
    }

    async markAsDone(itemId: number, userId: any) {
        if (itemId && userId) {
            const item = await this.itemRepository.createQueryBuilder()
            .where(`id = ${itemId}`)
            .andWhere(`userIdentyfier = '${userId}'`)
            .getOne();
            if (item) {
                item.done = true;
                item.doneDate = new Date();
                await this.itemRepository.save(item);
            }
        }
    }

}

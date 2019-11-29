import { Controller, Get, Request, Post, Body, Param } from '@nestjs/common';
import { ItemService } from './services/item/item.service';
import { Item } from './models/item.model';

@Controller()
export class AppController {
  constructor(private readonly itemService: ItemService) {}

  @Get('items/:id')
  GetItems(@Param('id') userId) {
    if (userId) {
      return this.itemService.getAllByUserIdentyfier(userId);
    }
    return [];
  }

  @Post('items/:id')
  async AddNew(@Param('id') userId, @Body('title')title: string, @Body('description')description: string) {
    if (userId) {
      const item = new Item();
      item.userIdentyfier = userId;
      item.name = title;
      item.description = description;
      item.addDate = new Date();
      item.done = false;
      await this.itemService.addItem(item);
    }
    return {};
  }
}

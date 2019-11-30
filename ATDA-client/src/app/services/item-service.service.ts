import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { USER_ID_NAME_KEY } from '../utils/application-keys';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    const userId = window.localStorage.getItem(USER_ID_NAME_KEY);
    return this.httpClient.get<Item[]>(`http://localhost:3000/items/${userId}`);
  }

  addNew(title: string, description: string) {
    const userId = window.localStorage.getItem(USER_ID_NAME_KEY);
    return this.httpClient.post(`http://localhost:3000/items/${userId}`, { title: title, description: description });
  }

  markAsDone(item: Item) {
    const userId = window.localStorage.getItem(USER_ID_NAME_KEY);
    return this.httpClient.put(`http://localhost:3000/items/${userId}`, { itemId: item.id });
  }

}

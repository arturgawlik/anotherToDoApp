import { Component, OnInit } from '@angular/core';
import { USER_ID_NAME_KEY } from './utils/application-keys';
import { generateGuid } from './utils/guid-generator.function';
import { ItemService } from './services/item-service.service';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.checkAndSetSomething();
    this.refreshList();
  }

  checkAndSetSomething() {
    const identifier = window.localStorage.getItem(USER_ID_NAME_KEY);
    if (!identifier) {
      window.localStorage.setItem(USER_ID_NAME_KEY, generateGuid());
    }
  }

  refreshList() {
    this.itemService.getAll().subscribe(items => {
      this.items = items;
    });
  }

  markAsDone(item: Item) {
    this.itemService.markAsDone(item).subscribe(r => {
      this.refreshList();
    });
  }

}

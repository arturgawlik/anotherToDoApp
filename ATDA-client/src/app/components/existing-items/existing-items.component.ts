import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-existing-items',
  templateUrl: './existing-items.component.html',
  styleUrls: ['./existing-items.component.css']
})
export class ExistingItemsComponent {

  @Input() items: Item[];

}

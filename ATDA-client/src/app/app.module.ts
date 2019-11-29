import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ExistingItemsComponent } from './components/existing-items/existing-items.component';
import { ItemService } from './services/item-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ExistingItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

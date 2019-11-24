import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ExistingItemsComponent } from './components/existing-items/existing-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ExistingItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

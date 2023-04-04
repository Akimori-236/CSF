import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item.component';
import { LogComponent } from './components/log.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './components/address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    LogComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

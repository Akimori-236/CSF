import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokerComponent } from './components/poker.component';
import { HandComponent } from './components/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    PokerComponent,
    HandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration.component';
import { TodoComponent } from './components/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // < reactive form module import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

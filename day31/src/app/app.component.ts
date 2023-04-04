import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31';
  disabled = false

  toggleInput() {
    console.log("button clicked")
    this.disabled = this.disabled
  }

  newInputValue(abc: any) {
    console.log(abc)
  }


  inputValue = ""
  printValue() {
    console.log(this.inputValue);
  }
}

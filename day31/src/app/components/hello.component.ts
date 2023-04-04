import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  // name = prompt("Whats your name?")
  @Input()
  message = "new message"

  date = new Date()


}

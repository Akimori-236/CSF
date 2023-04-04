import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  @Input()
  startNum = 0

  @Output()
  onValueChanged = new Subject<number>()

  changeNum(x: number) {
    this.startNum += x
    this.onValueChanged.next(x)
  }
}

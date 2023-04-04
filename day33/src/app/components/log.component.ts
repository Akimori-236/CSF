import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Item } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnChanges {


  @Input()
  items: Item[] = []
  itemCount = 0

  @Output()
  onSelection = new Subject<number>

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  selected(index: number) {
    this.onSelection.next(index)
  }
}

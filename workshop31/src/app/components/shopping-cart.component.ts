import { Component, Input, Output } from '@angular/core';
import { LineItem } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Input()
  cart!: LineItem[]

  @Output() // custom event
  onRemove = new Subject<number>

  removeItem(i: number): void {
    // send clicked index to custom event
    this.onRemove.next(i)
  }
}

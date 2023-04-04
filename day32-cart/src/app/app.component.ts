import { Component, OnInit, Output } from '@angular/core';
import { Customer, LineItem } from './components/models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'day32-cart';
  cart: LineItem[] = []

  insertNewLineItem(li: LineItem) {
    // search for duplicate before pushing
    let existingLineItem: LineItem | undefined = this.cart.find((lineitem: LineItem) => lineitem.item == li.item)

    // calculate new subtotal of lineitem
    if (!!existingLineItem) {
      existingLineItem.qty += li.qty
      existingLineItem.subtotal = existingLineItem.qty * existingLineItem.unitPrice
    } else {
      li.subtotal = li.qty * li.unitPrice
      this.cart.push(li)
    }
    console.info(">>> CART: ", this.cart)
  }


}

import { Component } from '@angular/core';
import { LineItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop31';

  cart: LineItem[] = []

  addToCart(itemName: string): void {
    const index = this.cart.findIndex(item => item.name == itemName)
    if (index < 0) {
      // item not found
      this.cart.push({
        name: itemName,
        qty: 1
      })
      console.log(this.cart)
    } else {
      // item in cart
      this.cart[index].qty++
      console.log(this.cart)
    }
  }

  removeItem(i: number): void {
    this.cart.splice(i, 1)
  }
}

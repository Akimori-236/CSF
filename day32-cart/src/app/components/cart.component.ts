import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Customer, LineItem } from './models';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {

  cartForm!: FormGroup

  @Input()
  cart!: LineItem[]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartForm = this.createForm()
  }

  // form binding creation
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      address: this.fb.control<string>('', [Validators.required]),
      delivery: this.fb.control<string>('', [Validators.required]),
      cart: this.fb.array([]),
      total: this.fb.control<number>(0)
    })
  }

  ngOnChanges(): void {
    // hmm how
  }

  checkout() {
    let total: number = 0
    const totalControl = this.cartForm.get('total') as FormControl
    const cartArray = this.cartForm.get('cart') as FormArray
    cartArray.clear() // just in case
    // populate form array
    this.cart.forEach((li: LineItem) => {
      cartArray.push(this.fb.group({
        item: li.item,
        unitPrice: li.unitPrice,
        qty: li.qty,
        subtotal: li.subtotal
      }))
      // should calculate total in ngOnChanges() instead
      total += li.subtotal
    })
    totalControl.setValue(total)
    const customer = this.cartForm.value as Customer
    console.info(">>> CUSTOMER", customer)
  }
}

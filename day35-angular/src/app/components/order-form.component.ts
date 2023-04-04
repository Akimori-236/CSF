import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderForm!: FormGroup
  itemArray!: FormArray

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.createForm()
  }

  private createForm(): FormGroup {
    // init array
    this.itemArray = this.fb.array([], [Validators.minLength(1)])
    // init main form
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [Validators.required]),
      lineItems: this.itemArray
    })
  }


  addLineItem(): void {
    const li: FormGroup = this.fb.group({
      item: this.fb.control<string>('', [Validators.required]),
      qty: this.fb.control<number>(0, [Validators.required, Validators.min(1)]),
    })
    this.itemArray.push(li)
  }

  deleteTask(index: number) {
    this.itemArray.removeAt(index)
  }
}

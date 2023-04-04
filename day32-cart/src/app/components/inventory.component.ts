import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Item, LineItem } from './models';
import { Subject } from 'rxjs';

const INVENTORY: Item[] = [
  { item: "apple", unitPrice: 0.3 },
  { item: "blueberries", unitPrice: 2 },
  { item: "broccoli", unitPrice: 1.3 },
  { item: "carrot", unitPrice: 0.6 },
  { item: "lettuce", unitPrice: 0.3 },
  { item: "onion", unitPrice: 0.4 },
  { item: "potato", unitPrice: 0.5 },
  { item: "strawberry", unitPrice: 5 }
]

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventory = INVENTORY

  inventoryForm!: FormGroup

  @Output()
  onAddToCart = new Subject<LineItem>

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inventoryForm = this.createForm()
  }

  // form binding creation
  private createForm(): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>('', [Validators.required]),
      unitPrice: this.fb.control<number>(0, [Validators.required, Validators.min(0.01)]),
      qty: this.fb.control<number>(0, [Validators.required, Validators.min(1)])
    })
  }

  populateItem(item: any): void {
    console.info("%s selected", item.item)
    // this.selectedItem = item
    const itemControl = this.inventoryForm.get('item') as FormControl
    const unitPriceControl = this.inventoryForm.get('unitPrice') as FormControl
    const selected: Item | undefined = this.inventory.find(i => i.item == item.item)
    if (!!selected) {
      // set values into form control
      itemControl.setValue(selected.item)
      unitPriceControl.setValue(selected.unitPrice)
    }
  }

  addToCart() {
    const li = this.inventoryForm.value as LineItem
    console.info("new line item", li)
    this.onAddToCart.next(li)
    this.inventoryForm.reset()
  }

  isFormInvalid(): boolean {
    return this.inventoryForm.invalid
  }
}

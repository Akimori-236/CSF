import { Component, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

const FRUITS: string[] = ["apple", "banana", "durian", "orange"]

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  fruits = FRUITS

  @Output()
  onNewItem = new Subject<string>

  addItem(itemName: string): void {
    this.onNewItem.next(itemName)
  }

}

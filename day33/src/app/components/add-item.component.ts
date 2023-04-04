import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit, OnChanges {

  addForm!: FormGroup

  @Output()
  onNewItem = new Subject<Item>

  @Input()
  item: Item | undefined = undefined

  get value(): Item {
    return this.addForm.value as Item
  }
  isInvalid(): boolean {
    return this.addForm.invalid
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.createForm()
  }

  // Form Creation
  private createForm(): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>('', [Validators.required]),
      qty: this.fb.control<number>(0, [Validators.required]),
    })
  }
  processForm() {
    const newItem = this.addForm.value as Item
    this.onNewItem.next(newItem)
    this.addForm.reset()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const itemCtrl = this.addForm.get('item') as FormControl
    const qtyCtrl = this.addForm.get('qty') as FormControl

  }
}

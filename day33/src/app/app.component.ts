import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Item } from './models';
import { AddItemComponent } from './components/add-item.component';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'day33';

  orderForm!: FormGroup
  items!: FormArray

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.createForm()
  }

  // Form Creation
  private createForm(): FormGroup {
    return this.fb.group({
      
    })
  }

  // items: Item[] = []
  // selectedItem: Item | undefined = undefined

  // @ViewChild(AddItemComponent)
  // addItemComp!: AddItemComponent
  // @ViewChild('modifyButton')
  // modifyBtn!: ElementRef

  // ngAfterViewInit(): void {

  // }

  // addToLog(item: Item) {
  //   this.items = [...this.items, item]
  // }

  // itemSelected(index: number) {
  //   this.selectedItem = this.items.at(index)
  // }

  // modifyItem() {
  //   console.log(this.addItemComp.value)
  // }
}

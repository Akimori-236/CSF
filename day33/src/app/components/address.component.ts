import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  addressForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm = this.createForm()
  }

  // Form Creation
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>(''),
      address: this.fb.control<string>(''),
    })
  }
}

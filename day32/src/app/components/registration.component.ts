import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RSVP } from 'src/app/models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // one big group for the whole form
  regForm!: FormGroup

  // form builder service provide by reactive form
  // private/public keyword will auto assign "this.fb = fb"
  constructor(private fb: FormBuilder) {

  }

  // called after constructor
  // for initialisation
  ngOnInit(): void {
    this.regForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      // label names of input
      // name: this.fb.<typeOfFormInput><inputType>(initial value)
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      age: this.fb.control<number>(18, [Validators.required, Validators.min(18)]),
      attendance: this.fb.control<string>('') // dropdown list
    })
  }

  submitForm() {
    // const rsvp = this.regForm.value as RSVP // cast form input as object (DIRECT MAPPING)
    const rsvp: RSVP = {
      name: this.regForm.get("name")?.value,
      email: this.regForm.get("email")?.value,
      age: this.regForm.get("age")?.value,
      attendance: this.regForm.get("attendance")?.value == "yes" // boolean conversion
    }
    console.info("Form submitted", rsvp)
    // this.regForm = this.createForm() // recreate form
    this.regForm.reset() // clear the form
  }

  // check if valid and if input was edited before
  isControlInvalid(controlName: string): boolean {
    const control = this.regForm.get(controlName) as FormControl
    return control.invalid && (!control.pristine)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create HTML form tag equivalent in TS
  addContactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Step 1: continues...
    this.addContactForm = new FormGroup({
      // Step 2: Create HTML input equivalents in TS
      name: new FormControl('', Validators.required ), // Step 5: work on validations
      phone: new FormControl('', Validators.required ),
      email: new FormControl('', [ Validators.required, Validators.email ] )
    });
  }

  addContactHandler(): void{
    console.log(this.addContactForm.value);
    
  }

}

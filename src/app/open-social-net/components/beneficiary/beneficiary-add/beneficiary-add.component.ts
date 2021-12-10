import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Stepper from "bs-stepper";

@Component({
  selector: 'app-beneficiary-add',
  templateUrl: './beneficiary-add.component.html',
  styleUrls: ['./beneficiary-add.component.scss']
})
export class BeneficiaryAddComponent implements OnInit {

  sexOptions: ['Ανδρας', 'Γυναίκα', 'Αλλο'];
  beneficiaryForm: FormGroup;
  private wizardStepper: Stepper;
  date = new Date();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.initializeForm();
    this.wizardStepper = new Stepper(document.querySelector('#stepper2'), {
      linear: false,
      animation: true
    });
  }

  initializeForm(): void {
    this.beneficiaryForm = this.fb.group({
      'afm': this.fb.control('', [Validators.minLength(9), Validators.maxLength(9)]),
      'amka': this.fb.control('', [Validators.required]),
      'adtorpassport': this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      'nationality': this.fb.control('', [Validators.required]),
      'firstname': this.fb.control('', Validators.required),
      'lastname': this.fb.control('', Validators.required),
      'fartherlastname': this.fb.control('', Validators.required),
      'fatherfirstname': this.fb.control('', Validators.required),
      'motherfirstname': this.fb.control('', Validators.required),
      'birthyear': this.fb.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      'sex': this.fb.control('', Validators.required),
      'address': this.fb.control('', Validators.required),
      'city': this.fb.control('', Validators.required),
      'zipcode': this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      'phone1': this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'phone2': this.fb.control('', [Validators.minLength(10), Validators.maxLength(10)]),
      'enabled': this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    if (this.beneficiaryForm.invalid) {
      this.beneficiaryForm.markAllAsTouched();
      return;
    }
  }

  wizardNext() {
    this.wizardStepper.next();
  }

  wizardPrevious() {
    this.wizardStepper.previous();
  }

  years(): number[] {
    const yearsArray = [];
    for(let i = this.date.getFullYear(); i >= this.date.getFullYear() - 100; i--) {
      yearsArray.push(i);
    }

    return yearsArray;
  }



}

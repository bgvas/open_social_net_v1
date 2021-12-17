import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Stepper from "bs-stepper";
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {take} from "rxjs/operators";
import {ContributorService} from "../../../services/contributor.service";

@Component({
  selector: 'app-contributor-add',
  templateUrl: './contributor-add.component.html',
  styleUrls: ['./contributor-add.component.scss']
})
export class ContributorAddComponent implements OnInit {

  addContributorForm: FormGroup;
  wizardStepper: Stepper;
  date = new Date();

  constructor(private fb: FormBuilder, private contributorService: ContributorService, private router: Router, private toaster: ToastrService) {  }

  ngOnInit(): void {

    this.wizardStepper = new Stepper(document.querySelector('#add-contributor-stepper'), {
      linear: false,
      animation: true
    });
    this.initializeForm();
  }

  initializeForm(): void {
    this.addContributorForm = this.fb.group({
      'afm': this.fb.control('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      'brandname': this.fb.control('', [Validators.required]),
      'name': this.fb.control('', Validators.required),
      'address': this.fb.control('', Validators.required),
      'city': this.fb.control('', Validators.required),
      'adt': this.fb.control('', [Validators.required]),
      'phone1': this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'phone2': this.fb.control('', [Validators.minLength(10), Validators.maxLength(10)]),
      'email': this.fb.control('', [Validators.email]),
      'enabled': this.fb.control('true', Validators.required),
      'comments': this.fb.control(''),
      'representative': this.fb.control('', Validators.required),
    })
  }

  onSubmit() {
    this.contributorService.create(this.addContributorForm.value).pipe(take(1)).subscribe(newBeneficiary => {
          this.toaster.success('Ολοκληρώθηκε επιτυχώς', 'Προσθήκη νέου Παρόχου')
        },
        error => {
          this.toaster.error('Απέτυχε!!!', 'Προσθήκη νέου Παρόχου')
          console.log(error?.errormessage);
        })
    history.back();
  }

  wizardNext() {
    this.wizardStepper.next();
  }

  wizardPrevious() {
    this.wizardStepper.previous();
  }


}

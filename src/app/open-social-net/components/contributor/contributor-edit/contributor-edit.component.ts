import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Stepper from "bs-stepper";
import {ContributorModel} from "../../../models/contributor-model";
import {ToastrService} from "ngx-toastr";
import {ContributorService} from "../../../services/contributor.service";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-contributor-edit',
  templateUrl: './contributor-edit.component.html',
  styleUrls: ['./contributor-edit.component.scss']
})
export class ContributorEditComponent implements OnInit {

  contributorForm: FormGroup;
  wizardStepper: Stepper;
  date = new Date();
  user: ContributorModel;
  isLoading = false;
  id = 0;

  constructor(private fb: FormBuilder, private toaster: ToastrService, private contributorService: ContributorService, private activatedRoute: ActivatedRoute) {

    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.initializeForm();
    this.edit_contributor(this.id);
  }

  ngOnInit(): void {
    this.wizardStepper = new Stepper(document.querySelector('#editContributorStepper'), {
      linear: false,
      animation: true
    });
  }

  ngOnDestroy() {
  }

  edit_contributor(id: number) {
    this.isLoading = true;
    this.contributorService.getById(id).pipe(take(1)).subscribe(result => {
          this.user = result;
          this.fillForm(result);
          this.isLoading = false;
        },
        error => {
          console.log(error?.errormessage);
          this.isLoading = false;
          history.back();
        })
  }


  initializeForm(): void {
    this.contributorForm = this.fb.group({
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

  fillForm(_user: ContributorModel) {
    this.contributorForm.get('afm').setValue(_user?.afm);
    this.contributorForm.get('address').setValue(_user?.address);
    this.contributorForm.get('brandname').setValue(_user?.brandname);
    this.contributorForm.get('representative').setValue(_user?.representative);
    this.contributorForm.get('adt').setValue(_user?.adt);
    this.contributorForm.get('city').setValue(_user?.city);
    this.contributorForm.get('phone1').setValue(_user?.phone1);
    this.contributorForm.get('phone2').setValue(_user?.phone2);
    this.contributorForm.get('email').setValue(_user?.email);
    this.contributorForm.get('enabled').setValue(_user?.enabled);
    this.contributorForm.get('comments').setValue(_user?.comments);
    this.contributorForm.get('name').setValue(_user?.name);
  }

  onSubmit() {
    this.contributorService.edit(this.contributorForm.value, this.id).pipe(take(1)).subscribe(updated_contributor => {
          this.toaster.success('Ολοκληρώθηκε επιτυχώς', 'Επεξεργασία Στοιχείων Παρόχου')
          history.back();
        },
        error => {
          history.back();
          this.toaster.error('Απέτυχε!!!', 'Επεξεργασία Στοιχείων Παρόχου')
          console.log(error?.errormessage);
        })
  }

  wizardNext() {
    this.wizardStepper.next();
  }

  wizardPrevious() {
    this.wizardStepper.previous();
  }

}

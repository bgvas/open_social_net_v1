import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import Stepper from "bs-stepper";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BeneficiaryModel} from "../../../models/beneficiary-model";
import {ToastrService} from "ngx-toastr";
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {take} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-beneficiary-edit',
  templateUrl: './beneficiary-edit.component.html',
  styleUrls: ['./beneficiary-edit.component.scss']
})
export class BeneficiaryEditComponent implements OnInit, OnDestroy {


  beneficiaryForm: FormGroup;
  wizardStepper: Stepper;
  date = new Date();
  user = new BeneficiaryModel();
  isLoading = false;
  id = 0;

  constructor(private fb: FormBuilder, private toaster: ToastrService, private beneficiaryService: BeneficiaryService, private activatedRoute: ActivatedRoute) {

      this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      this.initializeForm();
      this.edit_beneficiary(this.id);
  }

  ngOnInit(): void {
    this.wizardStepper = new Stepper(document.querySelector('#editStepper'), {
      linear: false,
      animation: true
    });
  }

  ngOnDestroy() {
  }

  edit_beneficiary(id: number) {
    this.isLoading = true;
    this.beneficiaryService.getById(id).pipe(take(1)).subscribe(result => {
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
      'email': this.fb.control('', [Validators.email]),
      'enabled': this.fb.control('', Validators.required)
    })
  }

  fillForm(_user: BeneficiaryModel) {
    this.beneficiaryForm.get('afm').setValue(_user?.afm);
    this.beneficiaryForm.get('amka').setValue(_user?.amka);
    this.beneficiaryForm.get('adtorpassport').setValue(_user?.adtorpassport);
    this.beneficiaryForm.get('nationality').setValue(_user?.nationality);
    this.beneficiaryForm.get('firstname').setValue(_user?.firstname);
    this.beneficiaryForm.get('lastname').setValue(_user?.lastname);
    this.beneficiaryForm.get('fartherlastname').setValue(_user?.fartherlastname);
    this.beneficiaryForm.get('fatherfirstname').setValue(_user?.fatherfirstname);
    this.beneficiaryForm.get('motherfirstname').setValue(_user?.motherfirstname);
    this.beneficiaryForm.get('birthyear').setValue(_user?.birthyear);
    this.beneficiaryForm.get('sex').setValue(_user?.sex);
    this.beneficiaryForm.get('address').setValue(_user?.address);
    this.beneficiaryForm.get('city').setValue(_user?.city);
    this.beneficiaryForm.get('zipcode').setValue(_user?.zipcode);
    this.beneficiaryForm.get('phone1').setValue(_user?.phone1);
    this.beneficiaryForm.get('phone2').setValue(_user?.phone2);
    this.beneficiaryForm.get('email').setValue(_user?.email);
    this.beneficiaryForm.get('enabled').setValue(_user?.enabled);
  }

  onSubmit() {
    this.beneficiaryService.create(this.beneficiaryForm.value).pipe(take(1)).subscribe(newBeneficiary => {
          this.toaster.success('Ολοκληρώθηκε επιτυχώς', 'Επεξεργασία Στοιχείων Οφελούμενου')
          history.back();
        },
        error => {
          history.back();
          this.toaster.error('Απέτυχε!!!', 'Επεξεργασία Στοιχείων Οφελούμενου')
          console.log(error?.errormessage);
        })
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

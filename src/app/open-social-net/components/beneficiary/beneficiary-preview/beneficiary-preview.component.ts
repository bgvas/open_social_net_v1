import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Stepper from "bs-stepper";
import {BeneficiaryModel} from "../../../models/beneficiary-model";
import {ToastrService} from "ngx-toastr";
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-beneficiary-preview',
  templateUrl: './beneficiary-preview.component.html',
  styleUrls: ['./beneficiary-preview.component.scss']
})
export class BeneficiaryPreviewComponent implements OnInit {

  beneficiaryForm: FormGroup;
  wizardStepper: Stepper;
  date = new Date();
  user = new BeneficiaryModel();
  isLoading = false;
  id = 0;

  constructor(private fb: FormBuilder, private toaster: ToastrService, private beneficiaryService: BeneficiaryService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.wizardStepper = new Stepper(document.querySelector('#beneficiaryPreviewStepper'), {
      linear: false,
      animation: true
    });
    this.preview_beneficiary(this.id);
  }

  ngOnDestroy() {
    //  this.wizardStepper.destroy();
  }

  preview_beneficiary(id: number) {
    this.isLoading = true;
    this.beneficiaryService.getById(id).pipe(take(1)).subscribe(result => {
      console.log(result)
          this.user = result;
          this.isLoading = false;
        },
        error => {
          console.log(error?.errormessage);
          this.isLoading = false;
          history.back();
        })
  }



}

import { Component, OnInit } from '@angular/core';
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {BeneficiaryModel} from "../../../models/beneficiary-model";
import {take} from "rxjs/operators";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.scss']
})
export class BeneficiaryListComponent implements OnInit {

  beneficiaries?: BeneficiaryModel[];
  current_page = 1;
  listForm: FormGroup;

  constructor(private beneficiaryService: BeneficiaryService, private fb: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
      this.beneficiaryService.getAll().pipe(take(1)).subscribe(results => {
        this.beneficiaries = results;
        for(const field of this.beneficiaries) {
          (this.listForm.get('listArray') as FormArray).push(
              this.fb.group({enabled: this.fb.control(field['enabled'])
          }))
        }
      },
          error => {
            console.log(error?.errormessage)
          })
  }

  initializeForm() {
    this.listForm = new FormGroup({
      listArray: new FormArray([])
    })
  }

  onChange(value, x) {
    this.beneficiaries[x].enabled = value.target.checked;
    (this.listForm.get('listArray') as FormArray).at(x).get('enabled').setValue(value.target.checked);
    this.beneficiaryService.edit(this.beneficiaries[x], x).pipe(take(1)).subscribe(saveChanges => {
      if(value.target.checked) {
        this.toaster.success('Ο λογαριασμός του Οφελούμενου','Ενεργοποιήθηκε')
      } else {
        this.toaster.warning('Ο λογαριασμός του Οφελούμενου','Απενεργοποιήθηκε')
      }
    },
        error => {
            console.log(error?.errormessage)
        })
  }


}

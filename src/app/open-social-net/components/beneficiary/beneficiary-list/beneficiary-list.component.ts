import {Component, OnInit, ViewChild} from '@angular/core';
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {BeneficiaryModel} from "../../../models/beneficiary-model";
import {take} from "rxjs/operators";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.scss']
})
export class BeneficiaryListComponent implements OnInit {

  @ViewChild(BeneficiaryListComponent) table: BeneficiaryListComponent;
  beneficiaries?: BeneficiaryModel[];
  current_page = 1;
  listForm: FormGroup;
  isLoading = false;
  matchingResults: any;
  tempData = [];


  constructor(private beneficiaryService: BeneficiaryService, private fb: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.initializeForm();
    this.loadList();
  }

  initializeForm() {
    this.listForm = new FormGroup({
      listArray: new FormArray([])
    })
  }

  loadList() {
    this.beneficiaryService.getAll().pipe(take(1)).subscribe(results => {
          this.beneficiaries = results;
          this.matchingResults = this.beneficiaries;
          for(const field of this.beneficiaries) {
            (this.listForm.get('listArray') as FormArray).push(
                this.fb.group({enabled: this.fb.control(field['enabled'])
                }))
          }
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
          console.log(error?.errormessage)
        })
  }

  onChange(value, x) {
    this.beneficiaries[x].enabled = value.target.checked;
    (this.listForm.get('listArray') as FormArray).at(x).get('enabled').setValue(value.target.checked);
    this.beneficiaryService.edit(this.beneficiaries[x], x).pipe(take(1)).subscribe(saveChanges => {
      this.matchingResults[x] = this.beneficiaries[x];
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

  filterUpdate(event) {
    const val = event.target.value.toUpperCase()
    if(val.length === 0) {
     this.matchingResults = this.beneficiaries
    }

    // filter our data
    const temp = this.matchingResults.filter(function (results) {
      return results.lastname.toUpperCase().indexOf(val) !== -1 || !val;
    });

    this.matchingResults = temp;
  }

  delete(confirmed){
    if(confirmed) {
      this.toaster.success('διαγράφηκε επιτυχώς.','Λογαριασμός Οφελούμενου')
      this.loadList();
    }
  }
}

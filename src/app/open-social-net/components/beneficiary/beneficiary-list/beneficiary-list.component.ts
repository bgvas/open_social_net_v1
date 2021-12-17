import {Component, OnDestroy, OnInit} from '@angular/core';
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {BeneficiaryModel} from "../../../models/beneficiary-model";
import {take, takeUntil} from "rxjs/operators";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.scss']
})
export class BeneficiaryListComponent implements OnInit, OnDestroy {

  beneficiaries?: BeneficiaryModel[];
  current_page = 1;
  listForm: FormGroup;
  isLoading = false;
  matchingResults: any;
  tempData = [];
  numberOfRecords = 0;
  private unsubscribe = new Subject<void>();


  constructor(private beneficiaryService: BeneficiaryService, private fb: FormBuilder, private toaster: ToastrService, private http:HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.initializeForm();
    this.loadList();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  initializeForm() {
    this.listForm = new FormGroup({
      listArray: new FormArray([])
    })
  }

  loadList() {
    this.beneficiaryService.getAll().pipe(takeUntil(this.unsubscribe)).subscribe(results => {
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

  onChange(value, x, id) {
    this.beneficiaries[x].enabled = value.target.checked;
    (this.listForm.get('listArray') as FormArray).at(x).get('enabled').setValue(value.target.checked);

    const update_beneficiary = this.beneficiaries[x];

    this.beneficiaryService.edit(update_beneficiary, id).subscribe(updated_beneficiary => {
      this.matchingResults[x] = updated_beneficiary;
      if(value.target.checked) {
        this.toaster.success('Ο λογαριασμός του Οφελούμενου','Ενεργοποιήθηκε')
      } else {
        this.toaster.warning('Ο λογαριασμός του Οφελούμενου','Απενεργοποιήθηκε')
      }
    },
        error => {
            this.toaster.error('Απέτυχε!!!', 'Επεξεργασία Στοιχείων Οφελούμενου')
            console.log(error?.errormessage)
        })
  }

  filterUpdate(event) {
    const val = event.target.value.toUpperCase()
    if(val.length === 0) {
     this.matchingResults = this.beneficiaries
    }

    // convert data to upperCase //
    this.matchingResults = this.matchingResults.filter(function (results) {
      return results.lastname.toUpperCase().indexOf(val) !== -1 || !val;
    });
  }

  delete(confirmed, id){
    if(confirmed) {
      this.beneficiaryService.delete(id).pipe(take(1)).subscribe(deleted => {
        this.toaster.success('διαγράφηκε επιτυχώς.','Λογαριασμός Οφελούμενου')
        this.loadList();
      },
          error => {
            console.log(error?.errormessage)
            this.toaster.error('H διαγραφή απέτυχε.','Λογαριασμός Οφελούμενου')
          })
    }
  }
}

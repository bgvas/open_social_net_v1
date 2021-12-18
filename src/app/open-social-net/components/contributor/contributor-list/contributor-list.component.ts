import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {take, takeUntil} from "rxjs/operators";
import {ContributorService} from "../../../services/contributor.service";
import {ContributorModel} from "../../../models/contributor-model";

@Component({
  selector: 'app-contributor-list',
  templateUrl: './contributor-list.component.html',
  styleUrls: ['./contributor-list.component.scss']
})
export class ContributorListComponent implements OnInit {

  contributors?: ContributorModel[];
  current_page = 1;
  listForm: FormGroup;
  isLoading = false;
  matchingResults: ContributorModel[];
  tempData = [];
  numberOfRecords = 0;
  private unsubscribe = new Subject<void>();


  constructor(private contributorService: ContributorService, private fb: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {
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
    this.isLoading = true;
    this.contributorService.getAll().pipe(takeUntil(this.unsubscribe)).subscribe(results => {
          this.contributors = results;
          this.matchingResults = this.contributors;

          for(const field of this.contributors) {
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
    this.contributors[x].enabled = value.target.checked;
    (this.listForm.get('listArray') as FormArray).at(x).get('enabled').setValue(value.target.checked);

    const update_contributor= this.contributors[x];
    this.contributorService.edit(update_contributor, id).subscribe(updated_contributor => {
          this.matchingResults[x] = updated_contributor;
          if(value.target.checked) {
            this.toaster.success('Ο λογαριασμός του Παρόχου','Ενεργοποιήθηκε')
          } else {
            this.toaster.warning('Ο λογαριασμός του Παρόχου','Απενεργοποιήθηκε')
          }
        },
        error => {
          this.toaster.error('Απέτυχε!!!', 'Επεξεργασία Στοιχείων Παρόχου')
          console.log(error?.errormessage)
        })
  }

  // filter by lastname //
  filterUpdate(event) {
   /* const val = event.target.value.toUpperCase()
    if(val.length === 0) {
      this.matchingResults = this.contributors
    }

    // convert data to upperCase //
    this.matchingResults = this.matchingResults.filter(function (results) {
      return results.lastname.toUpperCase().indexOf(val) !== -1 || !val;
    });*/
  }

  delete(confirmed, id){
    if(confirmed) {
      this.contributorService.delete(id).pipe(take(1)).subscribe(deleted => {
            this.toaster.success('διαγράφηκε επιτυχώς.','Λογαριασμός Παρόχου')
            this.loadList();
          },
          error => {
            console.log(error?.errormessage)
            this.toaster.error('H διαγραφή απέτυχε.','Λογαριασμός Παρόχου')
          })
    }
  }
}

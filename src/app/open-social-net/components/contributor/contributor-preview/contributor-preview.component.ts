import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import Stepper from "bs-stepper";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs/operators";
import {ContributorService} from "../../../services/contributor.service";
import {ContributorModel} from "../../../models/contributor-model";

@Component({
  selector: 'app-contributor-preview',
  templateUrl: './contributor-preview.component.html',
  styleUrls: ['./contributor-preview.component.scss']
})
export class ContributorPreviewComponent implements OnInit {

  wizardStepper: Stepper;
  date = new Date();
  user: ContributorModel;
  isLoading = false;
  id = 0;

  constructor(private fb: FormBuilder, private toaster: ToastrService, private contributorService: ContributorService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.wizardStepper = new Stepper(document.querySelector('#contributorPreviewStepper'), {
      linear: false,
      animation: true
    });
    this.preview_contributor(this.id);
  }

  ngOnDestroy() {
    //  this.wizardStepper.destroy();
  }

  preview_contributor(id: number) {
    this.isLoading = true;
    this.contributorService.getById(id).pipe(take(1)).subscribe(result => {
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

  delete(confirmed, id) {
    if(confirmed) {
      this.contributorService.delete(id).pipe(take(1)).subscribe(deleted => {
          this.toaster.success('διαγράφηκε επιτυχώς.','Λογαριασμός Παρόχου')
          history.back()
        },
        error => {
          history.back()
          console.log(error?.errormessage)
          this.toaster.error('H διαγραφή απέτυχε.','Λογαριασμός Παρόχου')
        })
    }
  }

}

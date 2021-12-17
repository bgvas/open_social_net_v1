import {Component, OnInit, VERSION} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {take} from "rxjs/operators";
import {BeneficiaryModel} from "../../../models/beneficiary-model";

@Component({
  selector: 'app-beneficiary-document',
  templateUrl: './beneficiary-document.component.html',
  styleUrls: ['./beneficiary-document.component.scss']
})
export class BeneficiaryDocumentComponent implements OnInit {

  id = 0;
  user: BeneficiaryModel;

  constructor(private activatedRoute: ActivatedRoute, private beneficiaryService: BeneficiaryService) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.beneficiaryService.getById(this.id).pipe(take(1)).subscribe(_user => {
      this.user = _user;
    })
  }

}

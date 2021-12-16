import { Component, OnInit } from '@angular/core';
import {BeneficiaryService} from "../../../open-social-net/services/beneficiary.service";
import {BeneficiaryModel} from "../../../open-social-net/models/beneficiary-model";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

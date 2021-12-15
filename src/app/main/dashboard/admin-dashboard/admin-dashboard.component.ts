import { Component, OnInit } from '@angular/core';
import {BeneficiaryService} from "../../../open-social-net/services/beneficiary.service";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private beneficiaryService: BeneficiaryService) { }

  ngOnInit(): void {

  }

}

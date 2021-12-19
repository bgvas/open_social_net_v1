import { Component, OnInit } from '@angular/core';
import {Needs} from "../../../shared/needs";


@Component({
  selector: 'app-beneficiary-needs',
  templateUrl: './beneficiary-needs.component.html',
  styleUrls: ['./beneficiary-needs.component.scss']
})
export class BeneficiaryNeedsComponent implements OnInit {

  needs = new Array<string>();
  selectNeeds = new Needs();
  constructor() {}

  /**
   * Add Item
   */
  addItem() {
    this.needs.push('')
  }

  /**
   * DeleteItem
   *
   * @param id
   */
  deleteItem(id) {
    this.needs.splice(id, 1)
  }

  ngOnInit(): void {
  }
}

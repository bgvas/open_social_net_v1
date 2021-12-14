import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BeneficiaryModel} from "../models/beneficiary-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  private dummy_beUrl = 'assets/dummy_http'
  private beUrl = environment.apiUrl + '/beneficiary';
  private _temp: any;

  constructor(private http: HttpClient) {  }

  create(newBeneficiary: BeneficiaryModel): Observable<any> {
    return this.http.post(this.beUrl + '/create', newBeneficiary)
  }

  getById(id: number): Observable<BeneficiaryModel> {
    return this.http.get(this.beUrl + '/GetById/' + id);
  }

  getAll(): Observable<BeneficiaryModel[]> {
    return this.http.get<BeneficiaryModel[]>(this.beUrl + '/search');
  }

  edit(changes: BeneficiaryModel, id: number): Observable<any> {
    return this.http.get(this.dummy_beUrl + '/create.json');//.put(this.beUrl + '/' + id, changes)
  }

  set temp(value: any) {
    this._temp = value;
  }

  get temp() {
    return this._temp;
  }
}

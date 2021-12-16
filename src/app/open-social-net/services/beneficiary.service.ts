import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BeneficiaryModel} from "../models/beneficiary-model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  private beUrl = environment.apiUrl + '/beneficiary';
  private _temp: any;
  private _list: any;

  constructor(private http: HttpClient) {  }

  create(newBeneficiary: BeneficiaryModel): Observable<any> {
    return this.http.post<any>(this.beUrl + '/create', newBeneficiary)
  }

  edit(changes: BeneficiaryModel, id: number): Observable<BeneficiaryModel> {
    return this.http.put<BeneficiaryModel>(this.beUrl + '/update/' + id, changes)
  }

  getById(id: number): Observable<BeneficiaryModel> {
    return this.http.get<BeneficiaryModel>(this.beUrl + '/GetById/' + id);
  }

  getAll(): Observable<BeneficiaryModel[]> {
    return this.http.get<BeneficiaryModel[]>(this.beUrl + '/search')
  }


  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.beUrl + '/delete/' + id)
  }

  set temp(value: any) {
    this._temp = value;
  }

  get temp() {
    return this._temp;
  }
}

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

  constructor(private http: HttpClient) {  }

  create(newBeneficiary: BeneficiaryModel): Observable<any> {
    return this.http.post('http://195.181.247.9/opensocialnet/api/beneficiary/create', newBeneficiary)
  }

  getById(id: number): Observable<BeneficiaryModel> {
    return this.http.get(this.beUrl + '/GetById/' + id);
  }

  getAll(): Observable<BeneficiaryModel[]> {
    return this.http.get<BeneficiaryModel[]>(this.dummy_beUrl + '/getAll.json');//(this.beUrl);
  }

  edit(changes: BeneficiaryModel, id: number): Observable<any> {
    return this.http.get(this.dummy_beUrl + '/create.json');//.put(this.beUrl + '/' + id, changes)
  }
}

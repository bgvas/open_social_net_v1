import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContributorModel} from "../models/contributor-model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {BeneficiaryModel} from "../models/beneficiary-model";

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  beUrl = environment.apiUrl + '/contributor'

  constructor(private http: HttpClient) { }

  /**
   *
   * @param newContributor
   */
  create(newContributor: ContributorModel): Observable<any> {
     return this.http.post(this.beUrl + '/create', newContributor);
  }

  getAll(): Observable<ContributorModel[]> {
    return this.http.get<ContributorModel[]>(this.beUrl + '/search')
  }

  edit(changes: ContributorModel, id: number): Observable<ContributorModel> {
    return this.http.put<ContributorModel>(this.beUrl + '/update/' + id, changes)
  }

  getById(id: number): Observable<ContributorModel> {
    return this.http.get<ContributorModel>(this.beUrl + '/GetById/' + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.beUrl + '/delete/' + id)
  }

}

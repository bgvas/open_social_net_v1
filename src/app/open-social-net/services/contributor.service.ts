import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContributorModel} from "../models/contributor-model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

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

}

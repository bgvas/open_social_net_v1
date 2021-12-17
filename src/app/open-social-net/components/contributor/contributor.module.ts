import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContributorService} from "../../services/contributor.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
    providers: [
        ContributorService
    ]
})
export class ContributorModule { }

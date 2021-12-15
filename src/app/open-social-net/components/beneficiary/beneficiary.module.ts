import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BeneficiaryListComponent} from "./beneficiary-list/beneficiary-list.component";
import {BeneficiaryAddComponent} from "./beneficiary-add/beneficiary-add.component";
import {BeneficiaryEditComponent} from "./beneficiary-edit/beneficiary-edit.component";
import {BeneficiaryPreviewComponent} from "./beneficiary-preview/beneficiary-preview.component";
import {BeneficiaryDeleteComponent} from "./beneficiary-delete/beneficiary-delete.component";
import {CoreDirectivesModule} from "../../../../@core/directives/directives";
import {NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {IMaskModule} from "angular-imask";
import {BeneficiaryService} from "../../services/beneficiary.service";
import {SharedModule} from "../../shared/shared.module";




const routes: Routes = [

      { path: 'list', component: BeneficiaryListComponent, data: { animation: 'BeneficiaryListComponent' } },
      { path: 'add', component: BeneficiaryAddComponent , data: { animation: 'BeneficiaryAddComponent' } },
      { path: 'edit/:id', component: BeneficiaryEditComponent, data: { animation: 'BeneficiaryEditComponent' } },
      { path: 'preview/:id', component: BeneficiaryPreviewComponent, data: { animation: 'BeneficiaryPreviewComponent' } },
      { path: 'delete/:id', component: BeneficiaryDeleteComponent, data: { animation: 'BeneficiaryDeleteComponent' } }

];

@NgModule({
  declarations: [
      BeneficiaryAddComponent,
      BeneficiaryDeleteComponent,
      BeneficiaryListComponent,
      BeneficiaryPreviewComponent,
      BeneficiaryEditComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CoreDirectivesModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        IMaskModule,
        NgbModule,
        SharedModule
    ],

    providers: [
        BeneficiaryService
    ]
})
export class BeneficiaryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TableModule} from "../main/tables/table/table.module";
import {CorePipesModule} from "../../@core/pipes/pipes.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContentHeaderModule} from "../layout/components/content-header/content-header.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CoreDirectivesModule} from "../../@core/directives/directives";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgSelectModule} from "@ng-select/ng-select";
import { BenefactorPreviewComponent } from './components/benefactor/benefactor-preview/benefactor-preview.component';
import { BenefactorEditComponent } from './components/benefactor/benefactor-edit/benefactor-edit.component';
import { BenefactorAddComponent } from './components/benefactor/benefactor-add/benefactor-add.component';
import { BenefactorListComponent } from './components/benefactor/benefactor-list/benefactor-list.component';
import { SupplierListComponent } from './components/supplier/supplier-list/supplier-list.component';
import { SupplierAddComponent } from './components/supplier/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './components/supplier/supplier-edit/supplier-edit.component';
import { SupplierPreviewComponent } from './components/supplier/supplier-preview/supplier-preview.component';
import { ContributorPreviewComponent } from './components/contributor/contributor-preview/contributor-preview.component';
import { ContributorEditComponent } from './components/contributor/contributor-edit/contributor-edit.component';
import { ContributorAddComponent } from './components/contributor/contributor-add/contributor-add.component';
import { ContributorListComponent } from './components/contributor/contributor-list/contributor-list.component';
import {IMaskModule} from "angular-imask";
import {CardSnippetModule} from "../../@core/components/card-snippet/card-snippet.module";
import {CsvModule} from "@ctrl/ngx-csv";
import {AuthGuard} from "../auth/helpers";
import {BeneficiaryModule} from "./components/beneficiary/beneficiary.module";
import {SharedModule} from "./shared/shared.module";


// routing

const routes: Routes = [

    // Ωφελούμενοι //
    {
        path: 'beneficiary',
        loadChildren: () => import('./components/beneficiary/beneficiary.module').then(m => m.BeneficiaryModule),
        canActivate: [AuthGuard]
    },


  // Δωρητές //
  { path: 'benefactor', children: [
      { path: 'list', component: BenefactorListComponent},
      { path: 'add', component: BenefactorAddComponent},
      { path: 'edit', component: BenefactorEditComponent},
      { path: 'preview', component: BenefactorEditComponent}
    ] },

  // Χορηγοί //
  { path: 'contributor', children: [
      { path: 'list', component: ContributorListComponent},
      { path: 'add', component: ContributorAddComponent},
      { path: 'edit', component: ContributorEditComponent},
      { path: 'preview', component: ContributorEditComponent}
    ] },

  // Προμηθευτές //
  { path: 'supplier', children: [
      { path: 'list', component: SupplierListComponent},
      { path: 'add', component: SupplierAddComponent},
      { path: 'edit', component: SupplierEditComponent},
      { path: 'preview', component: SupplierEditComponent}
    ] },



  //{ path: ':benefactor/preview', component: BeneficiaryEditComponent, data: { animation: 'BenefactorPreviewComponent' } }
];

@NgModule({
    declarations: [
        BenefactorPreviewComponent,
        BenefactorEditComponent,
        BenefactorAddComponent,
        BenefactorListComponent,
        SupplierListComponent,
        SupplierAddComponent,
        SupplierEditComponent,
        SupplierPreviewComponent,
        ContributorPreviewComponent,
        ContributorEditComponent,
        ContributorAddComponent,
        ContributorListComponent
    ],
    exports: [
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        TableModule,
        ContentHeaderModule,
        NgbModule,
        CoreDirectivesModule,
        NgxDatatableModule,
        CorePipesModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        IMaskModule,
        CardSnippetModule,
        CsvModule,
        BeneficiaryModule,
        SharedModule
    ]
})


export class OpenSocialNetModule { }



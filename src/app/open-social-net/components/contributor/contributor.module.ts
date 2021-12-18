import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContributorService} from "../../services/contributor.service";
import {RouterModule, Routes} from "@angular/router";
import {ContributorListComponent} from "./contributor-list/contributor-list.component";
import {ContributorAddComponent} from "./contributor-add/contributor-add.component";
import {ContributorEditComponent} from "./contributor-edit/contributor-edit.component";
import {ContributorPreviewComponent} from "./contributor-preview/contributor-preview.component";
import {ReactiveFormsModule} from "@angular/forms";
import {IMaskModule} from "angular-imask";
import {CoreCommonModule} from "../../../../@core/common.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [

  { path: 'list', component: ContributorListComponent, data: { animation: 'ContributorListComponent' } },
  { path: 'add', component: ContributorAddComponent , data: { animation: 'ContributorAddComponent' } },
  { path: 'edit/:id', component: ContributorEditComponent, data: { animation: 'ContributorEditComponent' } },
  { path: 'preview/:id', component: ContributorPreviewComponent, data: { animation: 'ContributorPreviewComponent' } },
 /* { path: 'document/:id', component: ContributorDocumentComponent, data: { animation: 'ContributorDocumentComponent' } },
  { path: 'delete/:id', component: ContributorDeleteComponent, data: { animation: 'ContributorDeleteComponent' } },
  { path: 'needs/:id', component: ContributorNeedsComponent, data: { animation: 'ContributorNeedsComponent' } }*/

];

@NgModule({
  declarations: [
      ContributorAddComponent,
      ContributorListComponent,
      ContributorEditComponent,
      ContributorPreviewComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        IMaskModule,
        CoreCommonModule,
        NgbModule,
        SharedModule
    ],
    providers: [
        ContributorService
    ]
})
export class ContributorModule { }

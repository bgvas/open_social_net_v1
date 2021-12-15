import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertDeleteModalComponent} from "./alert-modal/alert-delete-modal.component";
import {CoreCommonModule} from "../../../@core/common.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    AlertDeleteModalComponent
  ],
  exports: [
    AlertDeleteModalComponent
  ],
  imports: [
    CommonModule,
    CoreCommonModule,
    NgbModule
  ]
})
export class SharedModule { }

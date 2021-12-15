import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-alert-delete-modal',
  templateUrl: './alert-delete-modal.component.html',
  styleUrls: ['./alert-delete-modal.component.scss']
})
export class AlertDeleteModalComponent implements OnInit {


  @Input() typeOfUser: any;
  @Output() confirm = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // modal Basic
  modalOpen(modal) {
    this.modalService.open(modal);
  }

  goOnDelete() {
    this.modalService.dismissAll();
    this.confirm.emit(true);
  }

}

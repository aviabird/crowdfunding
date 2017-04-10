import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('lgModal') lgModal: ModalDirective;
  constructor() { }

  ngOnInit() {
  }

  showModal() {
    this.lgModal.show();
  }

  hideModal() {
    this.lgModal.hide();
  }

}

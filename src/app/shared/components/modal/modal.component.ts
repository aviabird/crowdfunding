import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('lgModal') lgModal: ModalDirective;

  constructor(private authService: AuthService) {
    this.authService.modalShow$.subscribe((status) => {
      console.log('status', status);
      if (status === false) {
        console.log('inside');
        this.hideModal();
      }
    });
  }

  ngOnInit() {
  }

  showModal() {
    this.authService.modalShow$.next(true);
    this.lgModal.show();
  }

  hideModal() {
    this.lgModal.hide();
  }

}

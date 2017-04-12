import { Router } from '@angular/router';
import { AuthGuard } from './../../../core/guards/auth.guard';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  redirectUrl = '';
  @ViewChild('lgModal') lgModal: ModalDirective;

  constructor(
    private authService: AuthService,
    private authguard: AuthGuard,
    private router: Router
    ) {
    this.authService.modalShow$.subscribe((status) => {
      if (status === false) {
        this.hideModal();
      }
    });
  }

  ngOnInit() {
  }

  showModal() {
    this.redirectUrl = '';
    this.lgModal.show();
  }

  hideModal() {
    this.redirectUrl = this.authguard.redirectUrl;
    this.lgModal.hide();
    console.log('redirectUrl', this.redirectUrl);
    if (this.redirectUrl !== '') {
      this.router.navigate([this.redirectUrl]);
    }
  }

}

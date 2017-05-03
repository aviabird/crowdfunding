import { AuthService } from './core/services/auth.service';
import { ModalComponent } from './shared/components/modal/modal.component';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modalType: string;
  @ViewChild('customModal') customModal: ModalComponent;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    router
      .events
      .filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        window.scrollTo(0, 0);
      });
  }

  setModalType(type) {
    this.modalType = type;
    this.customModal.showModal();
  }

}

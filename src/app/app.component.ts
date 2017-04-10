import { ModalComponent } from './shared/components/modal/modal.component';
import { environment } from './../environments/environment';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: Observable<number>;
  modalType: string;
  @ViewChild('customModal') customModal: ModalComponent;

  constructor(
    private router: Router,
    private authToken: Angular2TokenService
  ) {
    // this.authToken.init(environment.token_auth_config);
    // console.log('in construtcor');
    // this.authToken.signIn({email: 'user@example.com', password: 'monkey67'}).subscribe(

    //     res => {

    //       console.log('auth response:', res);
    //       console.log('auth response headers: ', res.headers.toJSON());
    //       console.log('auth response body:', res.json());
    //     },

    //     err => {
    //       console.error('auth error:', err);
    //     }
    // );



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


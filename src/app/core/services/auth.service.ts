import { AuthActions } from './../actions/auth.actions';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  modalShow$: Subject<boolean> = new Subject();

  constructor(
    private authService: Angular2TokenService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private store: Store<AppState>,
    private authActions: AuthActions,
    private router: Router,
  ) {
    this.authService.init(environment.token_auth_config);
    this.validateToken();
    this.toastyConfig.theme = 'bootstrap';
  }

  validateToken() {
    this.authService.validateToken().subscribe((res) => {
      if (res.status === 200) {
        const data = res.json().data;
        this.store.dispatch(this.authActions.loginSuccess(data));
      } else {
        this.store.dispatch(this.authActions.logoutSuccess());
      }
    },
    (error => console.log('error', error))
    );
  }

  logOutUser() {
    this.authService.signOut().subscribe(res => {
      this.store.dispatch(this.authActions.logoutSuccess());
      this.router.navigate(['/']);
    });
  }

  registerUser(signUpData) {
    this.authService.registerAccount(signUpData)
    .subscribe(res => {
      this.modalShow$.next(false);
      this.toastyService.success('Please Confirm Your Email to Complete your SignUp Process');
    }, (error) => {

      const errors = error.json().errors.full_messages;
      let message = '';
      errors.forEach(err => {
        message += err;
      });
      console.log('errors', error.json());

        const toastOptions: ToastOptions = {
            title: 'SignUp Error',
            msg: message
        };
        this.toastyService.error(toastOptions);
    });
  }

  logInUser(signInData) {
    this.authService.signIn(signInData).subscribe(res => {
      const data = res.json().data;
      this.modalShow$.next(false);
      this.store.dispatch(this.authActions.loginSuccess(data));
    }, (error) => {
      const errors = error.json().errors;
      let message = '';
      errors.forEach(err => {
        message += err;
      });
      console.log('errors', error.json());

        const toastOptions: ToastOptions = {
            title: 'Login Error',
            msg: message
        };
        this.toastyService.error(toastOptions);
    });
  }

}

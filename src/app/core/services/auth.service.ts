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
import { AuthService as SocialAuth } from 'ng2-ui-auth';

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
    private socialAuth: SocialAuth
  ) {
    this.authService.init(environment.token_auth_config);
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
    localStorage.clear();
    this.store.dispatch(this.authActions.logoutSuccess());
    this.router.navigate(['/']);

    // this.authService.signOut().subscribe(res => {
    // });
  }

  registerUser(signUpData) {
    this.authService.registerAccount(signUpData)
    .subscribe(res => {
      this.modalShow$.next(false);
      this.toastyService.success('Please Confirm Your Email to Complete your SignUp Process');
    }, (error) => {

      const errors = error.json().errors.full_messages;
      console.log('errors', errors);
      let message = '';
      errors.forEach(err => {
        message += err;
      });
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
        const toastOptions: ToastOptions = {
            title: 'Login Error',
            msg: message
        };
        this.toastyService.error(toastOptions);
    });
  }

  socialLogin(provider: string): Observable<any> {
    return this.socialAuth.authenticate(provider)
      .map((res: Response) => {
      const data = res.json().data;
      console.log('data', data);
      this.modalShow$.next(false);
      this.store.dispatch(this.authActions.loginSuccess(data));
      this.setHeadersInLocalStorage(res.json().headers);
    });
  }

  setHeadersInLocalStorage(headers) {
    console.log('headers', headers);
    localStorage.setItem('accessToken', headers['access-token']);
    localStorage.setItem('client', headers.client);
    localStorage.setItem('expiry', headers.expiry);
    localStorage.setItem('tokenType', headers['token-type']);
    localStorage.setItem('uid', headers.uid);
  }

}

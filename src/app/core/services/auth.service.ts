import { User } from './../models/user';
import { HttpService } from './http';
import { AuthActions } from './../actions/auth.actions';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
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
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private store: Store<AppState>,
    private authActions: AuthActions,
    private router: Router,
    private socialAuth: SocialAuth,
    private http: HttpService
  ) {
    this.toastyConfig.theme = 'bootstrap';
    this.validateToken();
  }


  validateToken() {
    this.http.get(
    `/api/v1/validate_token`
    ).subscribe((res) => {
      if (res.status === 200) {
        const data: User = res.json();
        this.store.dispatch(this.authActions.loginSuccess(data));
      }
    }, (err) => {
    });
  }

  logOutUser() {
    localStorage.clear();
    this.store.dispatch(this.authActions.logoutSuccess());
    this.router.navigate(['/']);
  }

  registerUser(signUpData) {
    this.http.post(
      '/api/v1/users', { user: signUpData }
    ).subscribe((res: Response) => {
      this.modalShow$.next(false);
    });
  }

  logInUser(signInData) {
    this.http.post(
      '/api/v1/authenticate', { credentials: signInData }
    ).subscribe((res: Response) => {
      const data: User = res.json();
      this.store.dispatch(this.authActions.loginSuccess(data));
      this.modalShow$.next(false);
      this.setTokenInLocalStorage(res.headers.toJSON());
    });
  }

  socialLogin(provider: string) {
    return this.socialAuth.authenticate(provider).subscribe((res: Response) => {
      const data: User = res.json();
      this.store.dispatch(this.authActions.loginSuccess(data));
      this.modalShow$.next(false);
      this.setTokenInLocalStorage(res.headers.toJSON());
    });
  }

  setTokenInLocalStorage(headers) {
    const token = headers.Authorization[0];
    localStorage.setItem('accessToken', token);
  }

}

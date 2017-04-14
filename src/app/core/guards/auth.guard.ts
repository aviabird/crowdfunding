import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { getAuthStatus } from './../reducers/auth.selector';
import { AuthActions } from './../actions/auth.actions';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastyService } from 'ng2-toasty';


@Injectable()
export class AuthGuard implements CanActivate {

  redirectUrl = '';
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastyService: ToastyService,
    private store: Store<AppState>
  ) {
    this.store.select(getAuthStatus).subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.authService.modalShow$.next(true);
      this.toastyService.success('Please Login!');
      this.redirectUrl = state.url;
      return false;
    }
  }

}

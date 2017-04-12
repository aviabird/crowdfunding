import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../services/auth.service';
import { ToastyService } from 'ng2-toasty';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authTokenService: Angular2TokenService,
    private router: Router,
    private authService: AuthService,
    private toastyService: ToastyService,
  ) {}

  canActivate() {
    if (this.authTokenService.userSignedIn()) {
      return true;
    } else {
      this.authService.modalShow$.next(true);
      this.toastyService.success('Please Login!');
      return false;
    }
  }

}

import { Angular2TokenService } from 'angular2-token';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private authToken: Angular2TokenService) {
    authToken.init(environment.token_auth_config);
  }

}

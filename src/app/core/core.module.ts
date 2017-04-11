import { AuthActions } from './actions/auth.actions';
import { AuthService } from './services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { HttpService } from './services/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

export function httpInterceptor(
  backend: XHRBackend,
  defaultOptions: RequestOptions,
) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ XHRBackend, RequestOptions]
    },
    AuthService,
    AuthActions
  ]
})
export class CoreModule { }

import { UserActions } from './../user/actions/user.actions';
import { CommentActions } from './../project/actions/comment.actions';
import { ProjectResolveGuard } from './guards/project-resolve.guard';
import { StripeService } from './services/stripe.service';
import { ProjectService } from './../project/services/project.service';
import { ProjectActions } from './../project/actions/project.actions';
import { AuthActions } from './actions/auth.actions';
import { AuthService } from './services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { HttpService } from './services/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { AuthGuard } from './guards/auth.guard';

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
    ProjectActions,
    CommentActions,
    UserActions,
    ProjectService,
    AuthService,
    AuthActions,
    StripeService,
    AuthGuard,
    ProjectResolveGuard
  ]
})
export class CoreModule { }

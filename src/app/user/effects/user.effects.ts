import { User } from './../../core/models/user';
import { UserService } from './../services/user.service';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { UserActions } from './../actions/user.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class UserEffects {
  constructor(
    private userActions: UserActions,
    private actions$: Actions,
    private userService: UserService
  ) {}

  // tslint:disable-next-line:member-ordering
  @Effect()
  loadUser$ = this.actions$
    .ofType(UserActions.LOAD_USER)
    .switchMap((action: Action) => {
      return this.userService.fetchUser(action.payload);
    })
    .map((user: User) => this.userActions.loadUserSuccess(user));

  // tslint:disable-next-line:member-ordering
  @Effect()
  updateUser$ = this.actions$
    .ofType(UserActions.UPDATE_USER)
    .switchMap((action: Action) => {
      return this.userService.updateUser(action.payload);
    })
    .map((user: User) => this.userActions.updateUserSuccess(user));

  // tslint:disable-next-line:member-ordering
  @Effect()
  updateUserProfilePic$ = this.actions$
    .ofType(UserActions.UPDATE_USER_PROFILE_PIC)
    .switchMap((action: Action) => {
      return this.userService.updateUserProfilePic(action.payload);
    })
    .map((user: User) => this.userActions.updateUserSuccess(user));

}

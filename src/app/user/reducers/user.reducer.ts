import { UserActions } from './../actions/user.actions';
import { Action } from '@ngrx/store';
import { UserState, initialState } from './user.state';


export function userReducer(state: UserState = initialState, action: Action): UserState {

  switch (action.type) {

    case UserActions.LOAD_USER_SUCCESS:
    case UserActions.UPDATE_USER_SUCCESS:
      const user = action.payload;
      return Object.assign({}, state, {
        user: user
      });

    default:
      return state;
  }

}

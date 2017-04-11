import { Action } from '@ngrx/store';

export class AuthActions {
  static SIGNUP = 'SIGNUP';
  static SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGOUT = 'LOGOUT';
  static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


  signup() {
    return { type: AuthActions.SIGNUP };
  }

  signupSuccess(user) {
    return {
      type: AuthActions.SIGNUP_SUCCESS,
      payload: user
    };
  }

  login(): Action {
    return { type: AuthActions.LOGIN };
  }

  loginSuccess(user): Action {
    return {
      type: AuthActions.LOGIN_SUCCESS,
      payload: user
    };
  }

  logout(): Action {
    return { type: AuthActions.LOGOUT };
  }

  logoutSuccess(): Action {
    return { type: AuthActions.LOGOUT_SUCCESS };
  }
}

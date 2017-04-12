import { AuthState } from './auth.state';
import { AppState } from './../../app.state';
import { createSelector } from 'reselect';

// Base Project State Function
function getAuthState(state: AppState): AuthState {
  return state.auth;
}

// ******************** Individual selectors ***************************
function fetchAuthStatus(state: AuthState) {
  return state.isAuthenticated;
}

function fetchAuthUser(state: AuthState) {
  return state.user;
}

// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
export const getAuthUser = createSelector(getAuthState, fetchAuthUser);

import { createSelector } from 'reselect';
import { AppState } from './../../app.state';
import { UserState } from './user.state';

// Base Project State Function
function getUserState(state: AppState): UserState {
  return state.user;
}

// ******************** Individual selectors ***************************
function fetchUser(state: UserState) {
  return state.user;
}

// *************************** PUBLIC API's ****************************
export const getUser = createSelector(getUserState, fetchUser);

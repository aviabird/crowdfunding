import { Map, Record, fromJS } from 'immutable';

export interface AuthState extends Map<string, any> {
  isAuthenticated: boolean;
  user: any;
}

export const AuthStateRecord = Record({
  isAuthenticated: false,
  user: fromJS({})
});

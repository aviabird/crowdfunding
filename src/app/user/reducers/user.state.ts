import { User } from './../../core/models/user';

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: null
};

import { User } from './../../core/models/user';
export class UserActions {
  static LOAD_USER = 'LOAD_USER';
  static LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
  static UPDATE_USER = 'UPDATE_USER';
  static UPDATE_USER_PROFILE_PIC = 'UPDATE_USER_PROFILE_PIC';
  static UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

  loadUser(id: number) {
    return {
      type: UserActions.LOAD_USER,
      payload: id
    };
  }

  loadUserSuccess(user: User) {
    return {
      type: UserActions.LOAD_USER_SUCCESS,
      payload: user
    };
  }

  updateUser(user) {
    return {
      type: UserActions.UPDATE_USER,
      payload: user
    };
  }

  updateUserProfilePic(image: string) {
    return {
      type: UserActions.UPDATE_USER_PROFILE_PIC,
      payload: image
    };
  }

  updateUserSuccess(user: User) {
    return {
      type: UserActions.UPDATE_USER_SUCCESS,
      payload: user
    };
  }

}

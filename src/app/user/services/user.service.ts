import { getAuthUser } from './../../core/reducers/auth.selector';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { User } from './../../core/models/user';
import { HttpService } from './../../core/services/http';
import { Response } from '@angular/http';
import { UserActions } from './../actions/user.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  authUser: User;

  constructor(
    private userActions: UserActions,
    private http: HttpService,
    private store: Store<AppState>
  ) {
    this.store.select(getAuthUser).subscribe((user) => {
      this.authUser = user;
    });
  }

  fetchUser(id: number) {
    return this.http.get(
      `/api/v1/users/${id}`
    ).map((res: Response) => {
      return res.json();
    });
  }

  updateUserProfilePic(image) {
    return this.http.post(
      `/api/v1/users/update_profile_pic`, { image_data: image }
    ).map((res: Response) => {
      return res.json();
    });
  }

  updateUser(user) {
    const id = user.id;
    return this.http.put(
      `/api/v1/users/${id}`, { user: user }
    ).map((res: Response) => {
      return res.json();
    });
  }

  isLoggedInUser(user) {
    if (user && this.authUser) {
      return user.id === this.authUser.id;
    }
    return false;
  }

  readNotification(id: number) {
    return this.http.put(
      `/api/v1/notifications/read_notification`, { id: id}
    ).map((res: Response) => {});
  }


}

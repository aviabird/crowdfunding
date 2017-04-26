import { HttpService } from './../../core/services/http';
import { Response } from '@angular/http';
import { UserActions } from './../actions/user.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private userActions: UserActions, private http: HttpService) {}

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

}

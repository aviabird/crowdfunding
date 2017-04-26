import { User } from './../../../../core/models/user';
import { UserActions } from './../../../actions/user.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  @Input() user: User;

  constructor(private store: Store<AppState>, private userActions: UserActions) { }

  ngOnInit() {
  }

  updateProfileImage(image) {
    const id = this.user.id;
    this.store.dispatch(this.userActions.updateUserProfilePic(image));
  }

}

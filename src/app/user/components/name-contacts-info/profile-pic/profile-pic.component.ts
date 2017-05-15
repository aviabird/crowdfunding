import { ImageUploadComponent } from './../../../../shared/components/image-upload/image-upload.component';
import { UserService } from './../../../services/user.service';
import { User } from './../../../../core/models/user';
import { UserActions } from './../../../actions/user.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  @Input() user: User;
  @ViewChild('imageUpload') imageUpload: ImageUploadComponent;

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  updateProfileImage(image) {
    const id = this.user.id;
    this.store.dispatch(this.userActions.updateUserProfilePic(image));
  }

  isAuthUser() {
    return this.userService.isLoggedInUser(this.user);
  }

  onUploadImage() {
    this.imageUpload.showImageBrowseDlg();
  }

}

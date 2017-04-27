import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { UserActions } from './../../../actions/user.actions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './../../../../core/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss']
})
export class SocialMediaLinksComponent implements OnInit {

  @Input() user: User;
  socialLinkForm: FormGroup;
  edited: boolean;

  constructor(
    private fb: FormBuilder,
    private userActions: UserActions,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  editSocialLinks() {
    this.socialLinkForm = this.initForm();
    this.edited = true;
  }

  saveSocialLinks() {
    const user = this.socialLinkForm.value;
    this.store.dispatch(this.userActions.updateUser(user));
    this.edited = false;
  }

  initForm() {
    return this.fb.group({
      'id': [this.user.id],
      'facebook_url': [this.user.facebook_url],
      'twitter_url': [this.user.twitter_url],
      'instagram_url': [this.user.instagram_url],
      'google_plus_url': [this.user.google_plus_url]
    });
  }


}

import { UserActions } from './../../../actions/user.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../../../core/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-password',
  templateUrl: './email-password.component.html',
  styleUrls: ['./email-password.component.scss']
})
export class EmailPasswordComponent implements OnInit {

  @Input() user: User;
  emailPasswordForm: FormGroup;
  edited: boolean;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private userActions: UserActions
  ) { }

  ngOnInit() {
  }

  editEmailPassword() {
    this.emailPasswordForm = this.initForm();
    this.edited = true;
  }

  saveEmailPassword() {
    const user = this.emailPasswordForm.value;
    this.store.dispatch(this.userActions.updateUser(user));
    this.edited = false;
  }

  initForm() {
    return this.fb.group({
      'id': [this.user.id],
      'email': [this.user.email, Validators.required],
      'secondary_email': [this.user.secondary_email],
      'password': ['', Validators.required]
    });
  }

}

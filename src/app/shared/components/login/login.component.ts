import { AppConstants } from './../../../app.constants';
import { AuthService } from './../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formSubmit = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.initLoginForm();
  }

  ngOnInit() {}

  onClickLogin() {
    this.formSubmit = true;
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.authService.logInUser(data);
    }
  }

  oAuthLogin(provider) {
    this.authService.socialLogin(provider).subscribe((res) => {
      console.log('social', res);
    });
  }

  initLoginForm() {
    return this.fb.group({
      'email': ['', this.validateEMAIL],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onCloseModal() {
    this.authService.modalShow$.next(false);
  }

  validateEMAIL(c: FormControl) {
    const EMAIL_REGEXP = AppConstants.EMAIL_REGEX;
    return EMAIL_REGEXP.test(c.value) ? null : { validateEMAIL: true };
  }


}

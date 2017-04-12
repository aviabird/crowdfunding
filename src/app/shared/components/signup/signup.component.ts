import { AppConstants } from './../../../app.constants';
import { AuthService } from './../../../core/services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formSubmit = false;
  signupForm: FormGroup;
  formModel: FormModel = {};

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.initSignupForm();
  }

  ngOnInit() {
  }

  onSignUp() {
    this.formSubmit = true;
    if (this.signupForm.valid && this.formModel.captcha) {
      const data = this.signupForm.value;
      this.authService.registerUser(data);
    }
  }

  oAuthLogin(provider) {
    this.authService.socialLogin(provider);
  }

  initSignupForm() {
    return this.fb.group({
      'name': ['', Validators.required],
      'email': ['', this.validateEMAIL],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'passwordConfirmation': ['', Validators.compose([Validators.required, this.validateConfirmPassword.bind(this)])]
    });
  }

  onCloseModal() {
    this.authService.modalShow$.next(false);
  }

  validateEMAIL(c: FormControl) {
    const EMAIL_REGEXP = AppConstants.EMAIL_REGEX;
    return EMAIL_REGEXP.test(c.value) ? null : { validateEMAIL: true };
  }

  validateConfirmPassword(c: FormControl) {
    const password = this.signupForm ? this.signupForm.get('password').value : '';
    const confirmPassword = c.value;
    return password === confirmPassword ? null : { validateConfirmPassword: true };
  }

}

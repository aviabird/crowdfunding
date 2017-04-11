import { AuthService } from './../../../core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.initSignupForm();
  }

  ngOnInit() {
  }

  onSignUp() {
    if (this.signupForm.valid) {
      const data = this.signupForm.value;
      this.authService.registerUser(data);
    }
  }

  initSignupForm() {
    return this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'passwordConfirmation': ['', Validators.required]
    });
  }

  onCloseModal() {
    this.authService.modalShow$.next(false);
  }

}

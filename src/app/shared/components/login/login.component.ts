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

  initLoginForm() {
    return this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onCloseModal() {
    this.authService.modalShow$.next(false);
  }

}

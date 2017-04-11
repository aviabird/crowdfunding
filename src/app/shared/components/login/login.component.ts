import { environment } from './../../../../environments/environment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  loginForm: FormGroup;
  formSubmit = false;

  constructor(private fb: FormBuilder, private authToken: Angular2TokenService) {
    this.loginForm = this.initLoginForm();
  }

  ngOnInit() {
    this.authToken.init(environment.token_auth_config);
  }

  onCloseModal() {
    this.closeModal.emit(true);
  }

  onClickLogin() {
    this.formSubmit = true;
    console.log('form', this.loginForm.value);
    if (this.loginForm.valid) {
      this.login();
    }
  }

  initLoginForm() {
    return this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login() {
    const credentials = this.loginForm.value;
    this.authToken.signIn(credentials).subscribe(
      res => {
        this.onCloseModal();
        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON());
        console.log('auth response body:', res.json());
      },
      err => {
        console.error('auth error:', err);
      }
    );
  }

  loginWithGoogle() {
    this.authToken.signInOAuth(
    'google'
    ).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }

}

import { Subscription } from 'rxjs/Subscription';
import { AuthUser } from './../../core/models/auth-user';
import { AuthService } from './../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { getAuthStatus, getAuthUser } from './../../core/reducers/auth.selector';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status$: Subscription;
  user$: Subscription;
  authStatus: boolean;
  authUser: AuthUser;

  @Output() modal: EventEmitter<string> = new EventEmitter<string>();

  constructor(private store: Store<AppState>, private authService: AuthService) {
    this.store.select(getAuthStatus).subscribe((status) => this.authStatus = status);
    this.store.select(getAuthUser).subscribe((user) => {
      this.authUser = user;
      console.log('user', user);
    });
    this.authService.modalShow$.subscribe((status) => {
      if (status === true) {
        this.showModal('login');
      }
    });
  }

  ngOnInit() {}

  showModal(type) {
    this.modal.emit(type);
  }

  onLogout() {
    this.authService.logOutUser();
  }

}


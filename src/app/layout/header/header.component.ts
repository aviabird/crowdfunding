import { AuthService } from './../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { getAuthStatus } from './../../core/reducers/auth.selector';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authStatus$: Observable<boolean>;

  @Output() modal: EventEmitter<string> = new EventEmitter<string>();

  constructor(private store: Store<AppState>, private authService: AuthService) {
    this.authStatus$ = this.store.select(getAuthStatus);
    this.authService.modalShow$.subscribe((status) => {
      console.log('status', status);
      if (status === true) {
        console.log('inside');
        this.showModal('login');
      }
    });
  }

  ngOnInit() {
  }

  showModal(type) {
    this.modal.emit(type);
  }

  onLogout() {
    this.authService.logOutUser();
  }

}

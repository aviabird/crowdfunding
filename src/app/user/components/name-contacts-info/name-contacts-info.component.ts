import { getUser } from './../../reducers/user.selectors';
import { ActivatedRoute } from '@angular/router';
import { UserActions } from './../../actions/user.actions';
import { AppState } from './../../../app.state';
import { Store } from '@ngrx/store';
import { User } from './../../../core/models/user';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-contacts-info',
  templateUrl: './name-contacts-info.component.html',
  styleUrls: ['./name-contacts-info.component.scss']
})
export class NameContactsInfoComponent implements OnInit {

  userId: number;
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private userActions: UserActions,
    private store: Store<AppState>
  ) {
    this.route.params.subscribe(params => this.userId = params['id']);
    this.user$ = this.store.select(getUser);
  }

  ngOnInit() {
    this.store.dispatch(this.userActions.loadUser(this.userId));
  }
}

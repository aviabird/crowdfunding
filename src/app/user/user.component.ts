import { ActivatedRoute } from '@angular/router';
import { UserActions } from './actions/user.actions';
import { getUser } from './reducers/user.selectors';
import { User } from './../core/models/user';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  selectedTab = 1;
  user$: Observable<User>;
  userId: number;

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.userId = params['id']);
    this.user$ = this.store.select(getUser);
  }

  ngOnInit() {
    this.store.dispatch(this.userActions.loadUser(this.userId));
  }

  changeTab(tab) {
    this.selectedTab = tab;
  }

}

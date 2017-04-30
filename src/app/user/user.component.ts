import { UserService } from './services/user.service';
import { getAuthUser } from './../core/reducers/auth.selector';
import { ActivatedRoute } from '@angular/router';
import { UserActions } from './actions/user.actions';
import { getUser } from './reducers/user.selectors';
import { User } from './../core/models/user';
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
  user: User;
  userId: number;

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.store.dispatch(this.userActions.loadUser(this.userId));
    });
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'notifications') {
        this.selectedTab = 5;
      }
    });

    this.store.select(getUser).subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

  changeTab(tab) {
    this.selectedTab = tab;
  }

  isCreator() {
    return this.userService.isLoggedInUser(this.user) && this.user.role_name === 'creator';
  }

  isAuthUser() {
    return this.userService.isLoggedInUser(this.user);
  }

}

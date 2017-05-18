import { StripeService } from './../core/services/stripe.service';
import { getAuthUser } from './../core/reducers/auth.selector';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { AuthUser } from './../core/models/auth-user';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripe-oauth-redirect',
  templateUrl: './stripe-oauth-redirect.component.html',
  styleUrls: ['./stripe-oauth-redirect.component.scss']
})
export class StripeOauthRedirectComponent implements OnInit {

  authUser: AuthUser;

  constructor(
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private store: Store<AppState>,
    private stripeService: StripeService,
    private router: Router
  ) {
    this.store.select(getAuthUser).subscribe((user) => {
      this.authUser = user;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const error = params['error'];
      const code = params['code'];

      if (error) {
        const message = params['error_description'];
        this.toastyService.success(message);
        this.router.navigate(['/users', this.authUser.id]);
      }

      if (code) {
        this.stripeService.getUserStripeCredentials(code).subscribe((res) => {
          if (res.error) {
            this.toastyService.error(res.error);
          } else if (res.message) {
            this.toastyService.success(res.message);
          }
          this.router.navigate(['/users', this.authUser.id]);
        });
      }

    });
  }

}

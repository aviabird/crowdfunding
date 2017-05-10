import { StripeOauthRedirectComponent } from './components/stripe-oauth-redirect/stripe-oauth-redirect.component';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'stripe_oauth/redirect', component: StripeOauthRedirectComponent }
];

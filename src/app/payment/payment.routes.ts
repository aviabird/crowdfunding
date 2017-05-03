import { SofortRedirectUrlComponent } from './sofort-redirect-url/sofort-redirect-url.component';
import { PaymentComponent } from './payment.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: PaymentComponent },
  { path: 'sofort/redirect', component: SofortRedirectUrlComponent }
];

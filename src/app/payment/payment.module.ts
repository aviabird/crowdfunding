import { routes } from './payment.routes';
import { PaymentComponent } from './payment.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { CardComponent } from './payment-methods/card/card.component';
import { SofortComponent } from './payment-methods/sofort/sofort.component';
import { SepaComponent } from './payment-methods/sepa/sepa.component';
import { SofortRedirectUrlComponent } from './sofort-redirect-url/sofort-redirect-url.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [
    PaymentComponent,
    PaymentMethodsComponent,
    CardComponent,
    SofortComponent,
    SepaComponent,
    SofortRedirectUrlComponent
  ],
  providers: []
})
export class PaymentModule { }

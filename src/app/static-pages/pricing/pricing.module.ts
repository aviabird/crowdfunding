import { routes } from './pricing.routes';
import { PricingComponent } from './pricing.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [
    PricingComponent
  ],
  providers: []
})
export class PricingModule { }

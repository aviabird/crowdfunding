import { PrivacyComponent } from './privacy.component';
import { routes } from './privacy.routes';
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
    PrivacyComponent
  ],
  providers: []
})
export class PrivacyModule { }

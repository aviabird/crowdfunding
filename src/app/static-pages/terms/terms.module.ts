import { routes } from './terms.routes';
import { TermsComponent } from './terms.component';
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
    TermsComponent
  ],
  providers: []
})
export class TermsModule { }

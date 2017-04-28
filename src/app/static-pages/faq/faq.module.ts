import { routes } from './faq.routes';
import { FaqComponent } from './faq.component';
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
    FaqComponent
  ],
  providers: []
})
export class FaqModule { }

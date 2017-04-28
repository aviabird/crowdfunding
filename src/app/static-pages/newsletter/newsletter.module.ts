import { routes } from './newsletter.routes';
import { NewsletterComponent } from './newsletter.component';
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
    NewsletterComponent
  ],
  providers: []
})
export class NewsLetterModule { }

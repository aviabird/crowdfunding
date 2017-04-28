import { routes } from './cookies.routes';
import { CookiesComponent } from './cookies.component';
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
    CookiesComponent
  ],
  providers: []
})
export class CookiesModule { }

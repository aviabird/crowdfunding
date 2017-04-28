import { routes } from './support.routes';
import { SupportComponent } from './support.component';
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
    SupportComponent
  ],
  providers: []
})
export class SupportModule { }

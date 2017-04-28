import { routes } from './partners.routes';
import { PartnersComponent } from './partners.component';
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
    PartnersComponent
  ],
  providers: []
})
export class PartnersModule { }

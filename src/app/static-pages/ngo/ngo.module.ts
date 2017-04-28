import { routes } from './ngo.routes';
import { NgoComponent } from './ngo.component';
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
    NgoComponent
  ],
  providers: []
})
export class NgoModule { }

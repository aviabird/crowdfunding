import { routes } from './press.routes';
import { PressComponent } from './press.component';
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
    PressComponent
  ],
  providers: []
})
export class PressModule { }

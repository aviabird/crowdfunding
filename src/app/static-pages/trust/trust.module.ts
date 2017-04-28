import { routes } from './trust.routes';
import { TrustComponent } from './trust.component';
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
    TrustComponent
  ],
  providers: []
})
export class TrustModule { }

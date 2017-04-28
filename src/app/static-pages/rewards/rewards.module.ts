import { routes } from './rewards.routes';
import { RewardsComponent } from './rewards.component';
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
    RewardsComponent
  ],
  providers: []
})
export class RewardsModule { }

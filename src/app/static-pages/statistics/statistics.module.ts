import { routes } from './statistics.routes';
import { StatisticsComponent } from './statistics.component';
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
    StatisticsComponent
  ],
  providers: []
})
export class StatisticsModule { }

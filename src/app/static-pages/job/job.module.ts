import { routes } from './job.routes';
import { JobComponent } from './job.component';
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
    JobComponent
  ],
  providers: []
})
export class JobModule { }

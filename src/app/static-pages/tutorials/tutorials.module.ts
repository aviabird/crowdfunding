import { routes } from './tutorials.routes';
import { TutorialsComponent } from './tutorials.component';
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
    TutorialsComponent
  ],
  providers: []
})
export class TutorialsModule { }

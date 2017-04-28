import { routes } from './rulebook.routes';
import { RulebookComponent } from './rulebook.component';
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
    RulebookComponent
  ],
  providers: []
})
export class RuleBookModule { }

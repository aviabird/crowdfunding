import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';
import { routes } from './about-us.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [
    AboutUsComponent
  ],
  providers: []
})
export class AboutUsModule { }

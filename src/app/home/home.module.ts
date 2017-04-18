import { HomeService } from './services/home.service';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }

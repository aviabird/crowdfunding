import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListingComponent } from './components/projects-listing/projects-listing.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ProjectsListingComponent
  ],
  providers: []
})
export class HomeModule { }

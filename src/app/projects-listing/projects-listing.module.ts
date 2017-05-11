import { SharedModule } from './../shared/shared.module';
import { ProjectsListingComponent } from './projects-listing.component';
import { RouterModule } from '@angular/router';
import { routes } from './projects-listing.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ProjectsListingComponent
  ],
  providers: []
})
export class ProjectListingModule { }

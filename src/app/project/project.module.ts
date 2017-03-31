import { routes } from './project.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectCreateComponent
  ]
})
export class ProjectModule { }

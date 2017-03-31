import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'new', component: ProjectCreateComponent },
  { path: ':id', component: ProjectDetailComponent }
];

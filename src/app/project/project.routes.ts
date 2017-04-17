import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

import { routes as detailRoutes } from './components/project-detail/project-detail.routes';

export const routes: Routes = [
  { path: 'new', component: ProjectCreateComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ProjectDetailComponent, children: detailRoutes }
];

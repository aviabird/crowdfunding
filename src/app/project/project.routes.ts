import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';


export const routes: Routes = [
  { path: 'new', component: ProjectCreateComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ProjectDetailComponent }
];

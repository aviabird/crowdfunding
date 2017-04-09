import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

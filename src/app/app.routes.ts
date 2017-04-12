import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule'},
  { path: 'oauth_callback', component: AppComponent }
];

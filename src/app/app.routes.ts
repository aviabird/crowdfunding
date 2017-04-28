import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { routes as staticPagesRoutes } from './static-pages/static-pages.routes';


export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule' },
  { path: 'categories', loadChildren: './projects-listing/projects-listing.module#ProjectListingModule' },
  { path: 'users/:id', loadChildren: './user/user.module#UserModule' },
  ...staticPagesRoutes
];

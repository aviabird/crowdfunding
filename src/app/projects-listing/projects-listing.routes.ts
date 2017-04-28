import { ProjectsListingComponent } from './projects-listing.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: ':category', component: ProjectsListingComponent }
];

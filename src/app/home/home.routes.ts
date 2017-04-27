import { ProjectsListingComponent } from './components/projects-listing/projects-listing.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:category', component: ProjectsListingComponent }
];

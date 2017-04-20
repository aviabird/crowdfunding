import { ProjectActions } from './../../project/actions/project.actions';
import { ProjectService } from './../../project/services/project.service';
import { Project } from './../models/project';
import { getSelectedProject } from './../../project/reducers/selectors';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastyService } from 'ng2-toasty';


@Injectable()
export class ProjectResolveGuard implements CanActivate {

  project: Project;

  constructor(
    private router: Router,
    private toastyService: ToastyService,
    private store: Store<AppState>,
    private projectService: ProjectService,
    private projectActions: ProjectActions
  ) {
    this.store.select(getSelectedProject).subscribe((project) => {
      this.project = project;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.ifProjectEmpty()) {
      const id = route.params['id'];
      this.store.dispatch(this.projectActions.fetchProject(id));
    }
    return true;
  }

  ifProjectEmpty() {
    return (Object.keys(this.project).length === 0);
  }

}

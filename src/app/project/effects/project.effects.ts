import { ProjectHttpService } from './../services/http/project-http.service';
import { Project } from './../../core/models/project';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ProjectActions } from './../actions/project.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectEffects {
  constructor(
    private projectActions: ProjectActions,
    private projectHttpService: ProjectHttpService,
    private actions$: Actions
    ) {}

  // tslint:disable-next-line:member-ordering
  @Effect()
  initDraft$ = this.actions$
    .ofType(ProjectActions.INIT_DRAFT_PROJECT)
    .switchMap((action: Action) => {
      return this.projectHttpService.initDraftProject();
    })
    .map((project: Project) => this.projectActions.initDraftSuccess(project));

  // tslint:disable-next-line:member-ordering
  @Effect()
  saveDraft$ = this.actions$
    .ofType(ProjectActions.SAVE_DRAFT)
    .switchMap((action: Action) => {
      return this.projectHttpService.createProject(action.payload);
    })
    .map((project: Project) => this.projectActions.initDraftSuccess(project));

  // tslint:disable-next-line:member-ordering
  @Effect()
  fetchDraft$ = this.actions$
    .ofType(ProjectActions.FETCH_PROJECT)
    .switchMap((action: Action) => {
      return this.projectHttpService.fetchProject(action.payload);
    })
    .map((project: Project) => this.projectActions.fetchProjectSuccess(project));

  // tslint:disable-next-line:member-ordering
  @Effect()
  updateProject$ = this.actions$
    .ofType(ProjectActions.UPDATE_PROJECT)
    .switchMap((action: Action) => {
      return this.projectHttpService.updateProject(action.payload);
    })
    .map((project: Project) => this.projectActions.updateProjectSuccess(project));


  // tslint:disable-next-line:member-ordering
  @Effect()
  fetchAllProjects$ = this.actions$
    .ofType(ProjectActions.FETCH__ALL_PROJECTS)
    .switchMap((action: Action) => {
      return this.projectHttpService.getProjects();
    })
    .map((projects: Project[]) => this.projectActions.fetchProjectsSuccess(projects));

  // tslint:disable-next-line:member-ordering
  @Effect()
  fetchCategoryProjects$ = this.actions$
    .ofType(ProjectActions.FETCH_CATEGORY_PROJECTS)
    .switchMap((action: Action) => {
      return this.projectHttpService.getProjectsByCategory(action.payload);
    })
    .map((projects: Project[]) => this.projectActions.fetchProjectsSuccess(projects));

}

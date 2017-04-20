import { Project } from './../../core/models/project';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ProjectService } from './../services/project.service';
import { ProjectActions } from './../actions/project.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectEffects {
  constructor(
    private projectActions: ProjectActions,
    private projectService: ProjectService,
    private actions$: Actions
    ) {}

  // tslint:disable-next-line:member-ordering
  @Effect()
  initDraft$ = this.actions$
    .ofType(ProjectActions.INIT_DRAFT_PROJECT)
    .switchMap((action: Action) => {
      return this.projectService.initDraftProject();
    })
    .map((project: Project) => this.projectActions.initDraftSuccess(project));

  // tslint:disable-next-line:member-ordering
  @Effect()
  saveDraft$ = this.actions$
    .ofType(ProjectActions.SAVE_DRAFT)
    .switchMap((action: Action) => {
      return this.projectService.createProject(action.payload);
    })
    .map((project: Project) => this.projectActions.initDraftSuccess(project));

  // tslint:disable-next-line:member-ordering
  @Effect()
  fetchDraft$ = this.actions$
    .ofType(ProjectActions.FETCH_PROJECT)
    .switchMap((action: Action) => {
      return this.projectService.fetchProject(action.payload);
    })
    .map((project: Project) => this.projectActions.fetchProjectSuccess(project));

}

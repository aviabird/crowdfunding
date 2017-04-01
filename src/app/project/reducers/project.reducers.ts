import { ProjectState, ProjectStateRecord } from './project.state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: ProjectState = new ProjectStateRecord() as ProjectState;

export const projectReducer: ActionReducer<ProjectState> =
  (state: ProjectState = initialState, { type, payload }: Action): ProjectState => {
  switch (type) {

    default:
      return state;
  }
};

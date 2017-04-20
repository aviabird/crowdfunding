import { ProjectState, ProjectStateRecored } from './project.state';
import { ProjectActions } from './../actions/project.actions';
import { ActionReducer, Action } from '@ngrx/store';

const initialState: ProjectState = new ProjectStateRecored() as ProjectState;

export function projectReducer(state: ProjectState = initialState, action: Action): ProjectState {
  switch (action.type) {
    case ProjectActions.INIT_DRAFT_SUCCESS:
      const draftProject = action.payload;

      return state.merge({
        draftProject: draftProject
      }) as ProjectState;

    case ProjectActions.SELECT_PROJECT:
    case ProjectActions.FETCH_PROJECT_SUCCESS:
      const selectedProject = action.payload;

      return state.merge({
        selectedProject: selectedProject
      }) as ProjectState;


    default:
      return state;
  }
}

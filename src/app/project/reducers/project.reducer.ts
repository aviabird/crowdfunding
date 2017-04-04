import { ProjectState, ProjectStateRecored } from './project.state';
import { ProjectActions } from './../actions/project.actions';
import { ActionReducer, Action } from '@ngrx/store';

const initialState: ProjectState = new ProjectStateRecored() as ProjectState;

export function projectReducer(state: ProjectState = initialState, action: Action): ProjectState {
  switch (action.type) {
    case ProjectActions.INIT_DRAFT_SUCCESS:
      const project = action.payload;

      return state.merge({
        draftProject: project
      }) as ProjectState;

    default:
      return state;
  }
}

import { ProjectActions } from './../actions/project.actions';
import { ActionReducer, Action } from '@ngrx/store';

export function projectReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case ProjectActions.INCREMENT:
      return state + 1;

    case ProjectActions.DECREMENT:
      return state - 1;

    case ProjectActions.RESET:
      return 0;

    default:
      return state;
  }
}

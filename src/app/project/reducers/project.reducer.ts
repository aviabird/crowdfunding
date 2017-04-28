import { Project } from './../../core/models/project';
import { ProjectState, initialState } from './project.state';
import { ProjectActions } from './../actions/project.actions';
import { ActionReducer, Action } from '@ngrx/store';

export function projectReducer(state: ProjectState = initialState, action: Action): ProjectState {
  switch (action.type) {
    case ProjectActions.INIT_DRAFT_SUCCESS:
      const draftProject = action.payload;

      return Object.assign({}, state, {
        draftProject: draftProject
      });

    case ProjectActions.SELECT_PROJECT:
    case ProjectActions.FETCH_PROJECT_SUCCESS:
      const selectedProject = action.payload;

      return Object.assign({}, state, {
        selectedProject: selectedProject
      });

    case ProjectActions.FETCH_PROJECTS_SUCCESS:
      const projects = <Project[]>action.payload;
      const newProjects = projects.filter(project => !state.entities[project.id]);
      const newProjectIds = newProjects.map(project => project.id);

      const newEntities = newProjects.reduce((entities: { [id: number]: Project }, project: Project) => {
        return Object.assign(entities, {
          [project.id]: project
        });
      }, {});

      return Object.assign({}, state, {
        ids: [ ...state.ids, ...newProjectIds ],
        entities: Object.assign({}, state.entities, newEntities)
      });

    default:
      return state;
  }
}

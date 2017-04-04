import { ProjectState } from './project.state';
import { AppState } from './../../app.state';
import { createSelector } from 'reselect';

// Base Project State Function
function getProjectState(state: AppState): ProjectState {
  return state.project;
}

// ******************** Individual selectors ***************************
function fetchDraftProject(state: ProjectState) {
  return state.draftProject;
}

// *************************** PUBLIC API's ****************************
export const getDraftProject = createSelector(getProjectState, fetchDraftProject);

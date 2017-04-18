import { ProjectState } from './project.state';
import { AppState } from './../../app.state';
import { createSelector } from 'reselect';

// Base Project State Function
function getProjectState(state: AppState): ProjectState {
  return state.project;
}

// ******************** Individual selectors ***************************
function fetchDraftProject(state: ProjectState) {
  return state.draftProject ? state.draftProject.toJS() : {};
}

function fetchSelectedProject(state: ProjectState) {
  return state.selectedProject ? state.selectedProject.toJS() : {};
}

// *************************** PUBLIC API's ****************************
export const getDraftProject = createSelector(getProjectState, fetchDraftProject);
export const getSelectedProject = createSelector(getProjectState, fetchSelectedProject);

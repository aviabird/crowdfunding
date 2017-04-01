import { ProjectState } from './project/reducers/project.state';
// This should hold the AppState interface
// Ideally importing all the substate for the application

export interface AppState {
  projects: ProjectState;
}

import { AuthState } from './core/reducers/auth.state';
import { ProjectState } from './project/reducers/project.state';

export interface AppState {
  project: ProjectState;
  auth: AuthState;
}

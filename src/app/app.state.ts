import { UserState } from './user/reducers/user.state';
import { CommentState } from './project/reducers/comment.state';
import { AuthState } from './core/reducers/auth.state';
import { ProjectState } from './project/reducers/project.state';

export interface AppState {
  project: ProjectState;
  comment: CommentState;
  auth: AuthState;
  user: UserState;
}

import { Comment } from './../../core/models/comment';

export interface CommentState {
  ids: number[];
  entities: { [id: number]: Comment };
}

export const initialState: CommentState = {
  ids: [],
  entities: {}
};

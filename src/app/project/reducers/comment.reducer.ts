import { Comment } from './../../core/models/comment';
import { CommentActions } from './../actions/comment.actions';
import { CommentState, initialState } from './comment.state';
import { Action } from '@ngrx/store';

export function commentReducer(state: CommentState = initialState, action: Action): CommentState {

  let newEntities;

  switch (action.type) {
    case CommentActions.LOAD_COMMENTS_SUCCESS:
      const comments = <Comment[]>action.payload;
      if (!comments) {
        return initialState;
      }
      const commentIds = comments.map(comment => comment.id);
      newEntities = comments.reduce((entities: { [id: number]: Comment }, comment: Comment) => {
        return Object.assign(entities, {
          [comment.id]: comment
        });
      }, {});

      return Object.assign({}, state, {
        ids: commentIds,
        entities: newEntities
      });

    case CommentActions.CLEAR_COMMENTS:
      return initialState;

    default:
      return state;
  }
}

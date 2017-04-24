import { Comment } from './../../core/models/comment';
import { CommentActions } from './../actions/comment.actions';
import { CommentState, initialState } from './comment.state';
import { Action } from '@ngrx/store';

export function commentReducer(state: CommentState = initialState, action: Action): CommentState {

  let newEntities;

  switch (action.type) {
    case CommentActions.LOAD_COMMENTS_SUCCESS:
      const comments = <Comment[]>action.payload;
      const newComments = comments.filter(comment => !state.entities[comment.id]);

      const newCommentIds = newComments.map(comment => comment.id);
      newEntities = newComments.reduce((entities: { [id: number]: Comment }, comment: Comment) => {
        return Object.assign(entities, {
          [comment.id]: comment
        });
      }, {});

      return Object.assign({}, state, {
        ids: [ ...state.ids, ...newCommentIds ],
        entities: Object.assign({}, state.entities, newEntities)
      });

    case CommentActions.ADD_COMMENT_SUCCESS:
      const newComment = <Comment>action.payload;

      return Object.assign({}, state, {
        ids: [ ...state.ids, newComment.id ],
        entities: Object.assign({}, state.entities, { [newComment.id]: newComment })
      });

    case CommentActions.DELETE_COMMENT_SUCCESS:
      const deletedId = <number>action.payload;
      const newIds = state.ids.filter(val => val !== deletedId);

      newEntities = newIds.reduce((entities: { [id: string]: Comment }, id: number) => {
        return Object.assign(entities, {
          [id]: state.entities[id]
        });
      }, {});

      return Object.assign({}, state, {
        entities: newEntities,
        ids: newIds
      });

    default:
      return state;
  }
}

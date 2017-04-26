import { Comment } from './../../core/models/comment';

export class CommentActions {
  static LOAD_COMMENTS = 'LOAD_COMMENTS';
  static LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
  static ADD_COMMENT = 'ADD_COMMENT';
  static ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
  static EDIT_COMMENT = 'EDIT_COMMENT';
  static EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
  static DELETE_COMMENT = 'DELETE_COMMENT';
  static DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
  static CLEAR_COMMENTS = 'CLEAR_COMMENTS';

  loadComments(project_id: number) {
    return {
      type: CommentActions.LOAD_COMMENTS,
      payload: project_id
    };
  }

  loadCommentSuccess(comments: Comment[]) {
    return {
      type: CommentActions.LOAD_COMMENTS_SUCCESS,
      payload: comments
    };
  }

  addComment(comment) {
    return {
      type: CommentActions.ADD_COMMENT,
      payload: comment
    };
  }

  addCommentSuccess(comment: Comment) {
    return {
      type: CommentActions.ADD_COMMENT_SUCCESS,
      payload: comment
    };
  }

  editComment(comment) {
    return {
      type: CommentActions.EDIT_COMMENT,
      payload: comment
    };
  }

  editCommentSuccess(comment: Comment) {
    return {
      type: CommentActions.EDIT_COMMENT_SUCCESS,
      payload: comment
    };
  }

  deleteComment(id: number) {
    return {
      type: CommentActions.DELETE_COMMENT,
      payload: id
    };
  }

  deleteCommentSuccess(id: number) {
    return {
      type: CommentActions.DELETE_COMMENT_SUCCESS,
      payload: id
    };
  }

  clearComments() {
    return { type: CommentActions.CLEAR_COMMENTS };
  }

}

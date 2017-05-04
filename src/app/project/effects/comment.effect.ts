import { CommentHttpService } from './../services/http/comment-http.service';
import { Comment } from './../../core/models/comment';
import { CommentActions } from './../actions/comment.actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentEffects {
  constructor(
    private commentActions: CommentActions,
    private commentHttpService: CommentHttpService,
    private actions$: Actions
  ) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  loadComments$ = this.actions$
    .ofType(CommentActions.LOAD_COMMENTS)
    .switchMap((action: Action) => {
      return this.commentHttpService.fetchProjectComments(action.payload);
    })
    .map((comments: Comment[]) => this.commentActions.loadCommentSuccess(comments));


  // tslint:disable-next-line:member-ordering
  @Effect()
  addNewComment$ = this.actions$
    .ofType(CommentActions.ADD_COMMENT)
    .switchMap((action: Action) => {
      return this.commentHttpService.addNewComment(action.payload);
    })
    .map((comment: Comment) => this.commentActions.addCommentSuccess(comment));

  // tslint:disable-next-line:member-ordering
  @Effect()
  deleteComment$ = this.actions$
    .ofType(CommentActions.DELETE_COMMENT)
    .switchMap((action: Action) => {
      return this.commentHttpService.deleteComment(action.payload);
    })
    .map((id: number) => {
      console.log('id', id);
      return this.commentActions.deleteCommentSuccess(id);
    });

  // tslint:disable-next-line:member-ordering
  @Effect()
  editComment$ = this.actions$
    .ofType(CommentActions.EDIT_COMMENT)
    .switchMap((action: Action) => {
      return this.commentHttpService.editComment(action.payload);
    })
    .map((comment: Comment) => this.commentActions.editCommentSuccess(comment));

}

import { Comment } from './../../../../core/models/comment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getAuthStatus, getAuthUser } from './../../../../core/reducers/auth.selector';
import { CommentActions } from './../../../actions/comment.actions';
import { getProjectComments } from './../../../reducers/selectors';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() projectId: number;

  commentForm: FormGroup;
  commentEditForm: FormGroup;

  comments$: Observable<Comment[]>;
  authStatus$: Observable<boolean>;
  authUser$: Observable<any>;

  edited: boolean;
  editedCommentId: number;

  constructor(private store: Store<AppState>,
    private commentActions: CommentActions,
    private fb: FormBuilder
  ) {
    this.comments$ = this.store.select(getProjectComments);
    this.authStatus$ = this.store.select(getAuthStatus);
    this.authUser$ = this.store.select(getAuthUser);
  }

  ngOnInit() {
    this.commentForm = this.initCommentForm();
    this.store.dispatch(this.commentActions.loadComments(this.projectId));
  }

  addComment() {
    const newComment = this.commentForm.value;
    this.store.dispatch(this.commentActions.addComment(newComment));
    this.commentForm = this.initCommentForm();
  }

  deleteComment(id: number) {
    this.store.dispatch(this.commentActions.deleteComment(id));
  }

  editComment(comment) {
    this.commentEditForm = this.initEditForm(comment);
    this.editedCommentId = comment.id;
    this.edited = true;
  }

  saveEditedComment() {
    const comment = this.commentEditForm.value;
    this.editedCommentId = null;
    this.edited = false;
    this.store.dispatch(this.commentActions.editComment(comment));
    return false;
  }

  initCommentForm() {
    return this.fb.group({
      'body': ['', Validators.required],
      'project_id': [this.projectId]
    });
  }

  initEditForm(comment) {
    return this.fb.group({
      'id': [comment.id],
      'body': [comment.body, Validators.required],
      'project_id': [this.projectId]
    });
  }

}

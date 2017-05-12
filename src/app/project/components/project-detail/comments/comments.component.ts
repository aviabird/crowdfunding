import { CommentHttpService } from './../../../services/http/comment-http.service';
import { getProjectComments } from './../../../reducers/project.selector';
import { Comment } from './../../../../core/models/comment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getAuthStatus, getAuthUser } from './../../../../core/reducers/auth.selector';
import { CommentActions } from './../../../actions/comment.actions';
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
  commentReplyForm: FormGroup;

  comments$: Observable<Comment[]>;
  authStatus$: Observable<boolean>;
  authUser$: Observable<any>;
  authUser: any;

  edited: boolean;
  editedCommentId: number;
  reply: boolean;
  replyCommentId: number;

  constructor(private store: Store<AppState>,
    private commentActions: CommentActions,
    private fb: FormBuilder,
    private commentHttpService: CommentHttpService
  ) {
    this.comments$ = this.store.select(getProjectComments);
    this.authStatus$ = this.store.select(getAuthStatus);
    this.authUser$ = this.store.select(getAuthUser);
    this.authUser$.subscribe((user) => this.authUser = user);
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
    this.reply = false;
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

  replyToComment(id: number) {
    this.edited = false;
    this.commentReplyForm = this.initReplyForm(id);
    this.replyCommentId = id;
    this.reply = true;
  }

  addReplyComment() {
    const replyComment = this.commentReplyForm.value;
    this.store.dispatch(this.commentActions.addComment(replyComment));
    this.reply = false;
    return false;
  }

  initCommentForm() {
    return this.fb.group({
      'body': ['', Validators.required],
      'project_id': [this.projectId],
      'parent_id': ['null'],
      'author_name': [this.authUser.name],
      'author_image': [this.authUser.image_url]
    });
  }

  initEditForm(comment) {
    return this.fb.group({
      'id': [comment.id],
      'body': [comment.body, Validators.required],
      'project_id': [this.projectId],
      'parent_id': [comment.parent_id],
      'author_name': [this.authUser.name],
      'author_image': [this.authUser.image_url]
    });
  }

  initReplyForm(parent_id) {
    return this.fb.group({
      'body': ['', Validators.required],
      'project_id': [this.projectId],
      'parent_id': [parent_id],
      'author_name': [this.authUser.name],
      'author_image': [this.authUser.image_url]
    });
  }

}

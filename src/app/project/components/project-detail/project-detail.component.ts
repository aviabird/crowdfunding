import { ProjectActions } from './../../actions/project.actions';
import { ActivatedRoute } from '@angular/router';
import { getSelectedProject } from './../../reducers/project.selector';
import { CommentActions } from './../../actions/comment.actions';
import { Subscription } from 'rxjs/Subscription';
import { Project } from './../../../core/models/project';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  projectSub$: Subscription;
  routeSub$: Subscription;
  project: any;
  selectedTab = 1;
  amount: number;

  constructor(
    private store: Store<AppState>,
    private commentActions: CommentActions,
    private route: ActivatedRoute,
    private projectActions: ProjectActions) {

    this.routeSub$ = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(this.projectActions.fetchProject(id));
    });

    this.projectSub$ = this.store.select(getSelectedProject).subscribe((project) => {
      this.project = project;
    });
  }

  ngOnInit() {
  }

  changeTab(number) {
    this.selectedTab = number;
  }

  ngOnDestroy() {
    this.store.dispatch(this.commentActions.clearComments());
    this.projectSub$.unsubscribe();
    this.routeSub$.unsubscribe();
  }

}

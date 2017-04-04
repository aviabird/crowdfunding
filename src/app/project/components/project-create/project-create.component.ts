import { AppState } from './../../../app.state';
import { ProjectActions } from './../../actions/project.actions';
import { ProjectState } from './../../reducers/project.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  selectedTab: number;

  constructor(private store: Store<AppState>, private actions: ProjectActions) {
    this.selectedTab = 1;
  }

  ngOnInit() {
  }

  changeTab(tab: number) {
    this.selectedTab = tab;
  }

  incrementTab() {
    this.selectedTab++;
  }

  increment() {
    this.store.dispatch(this.actions.increment());
  }

  decrement() {
    this.store.dispatch(this.actions.decrement());
  }

  reset() {
    this.store.dispatch(this.actions.reset());
  }


}

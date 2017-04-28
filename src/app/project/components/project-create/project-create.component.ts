import { ProjectService } from './../../services/project.service';
import { Project } from './../../../core/models/project';
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
  showLoader: any = false;

  constructor(
    private store: Store<AppState>,
    private actions: ProjectActions,
    private projectService: ProjectService
  ) {
    this.selectedTab = 1;
    this.projectService.savingDraft.subscribe((res) => {
      this.showLoader = res;
      if (this.showLoader === false) {
        this.incrementTab();
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(this.actions.initDraftProject());
  }

  changeTab(tab: number) {
    window.scrollTo(0, 0);
    this.selectedTab = tab;
  }

  incrementTab() {
    window.scrollTo(0, 0);
    this.selectedTab++;
  }

}

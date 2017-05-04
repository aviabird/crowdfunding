import { ProjectHttpService } from './../../services/http/project-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from './../../../core/models/project';
import { AppState } from './../../../app.state';
import { ProjectActions } from './../../actions/project.actions';
import { ProjectState } from './../../reducers/project.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit, OnDestroy {

  selectedTab: number;
  showLoader: any = false;
  isEditing = false;

  constructor(
    private store: Store<AppState>,
    private actions: ProjectActions,
    private projectHttpService: ProjectHttpService,
    private router: Router,
    private route: ActivatedRoute,
    private projectActions: ProjectActions,
  ) {
    this.setProject();
    this.selectedTab = 1;
    this.projectHttpService.savingDraft.subscribe((res) => {
      this.showLoader = res;
      if (this.showLoader === false) {
        this.incrementTab();
      }
    });
  }

  ngOnInit() {}

  changeTab(tab: number) {
    window.scrollTo(0, 0);
    this.selectedTab = tab;
  }

  incrementTab() {
    window.scrollTo(0, 0);
    this.selectedTab++;
  }

  private setProject() {
    if (this.router.url === '/projects/new') {
      this.isEditing = false;
      this.store.dispatch(this.actions.initDraftProject());
    } else {
      this.isEditing = true;
      this.route.params.subscribe((params) => {
        const id = params['id'];
        this.store.dispatch(this.projectActions.fetchProject(id));
      });
    }
  }

  ngOnDestroy() {}

}

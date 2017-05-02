import { Subscription } from 'rxjs/Subscription';
import { getAllProjects } from './../project/reducers/project.selector';
import { ProjectService } from './../project/services/project.service';
import { ProjectActions } from './../project/actions/project.actions';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Project } from './../core/models/project';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  projectsSub$: Subscription;
  projects: Project[];
  message = '';

  constructor(private route: ActivatedRoute,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private projectService: ProjectService,
    private store: Store<AppState>,
    private projectActions: ProjectActions
  ) {
    this.toastyConfig.theme = 'bootstrap';
    this.route.queryParams.subscribe((params) => this.message = params['message']);
    this.projectsSub$ = this.store.select(getAllProjects).subscribe((projects => this.projects = projects));
  }

  ngOnInit() {
    this.store.dispatch(this.projectActions.fetchAllProjects());
    this.loadScript();

    if (this.message) {
      this.toastyService.success(this.message);
    }
  }

  ngOnDestroy() {
    this.projectsSub$.unsubscribe();
  }

  loadScript() {
    $('.testi-slide-2').bxSlider({
      mode: 'fade',
      auto: true
    });

    jQuery.stellar({
      horizontalScrolling: false,
      scrollProperty: 'scroll',
      positionProperty: 'position',
    });

    $('#slides').superslides({
          animation: 'fade',
        play: 8000
    });
  }
}

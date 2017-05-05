import { DateService } from './../core/services/date.service';
import { getAllProjects } from './../project/reducers/project.selector';
import { ProjectActions } from './../project/actions/project.actions';
import { AppState } from './../app.state';
import { Project } from './../core/models/project';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects-listing',
  templateUrl: './projects-listing.component.html',
  styleUrls: ['./projects-listing.component.scss']
})
export class ProjectsListingComponent implements OnInit, OnDestroy {

  categorySub$: Subscription;
  routeSub$: Subscription;
  category: string;
  projects: Project[];
  trendingProject: Project;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private projectActions: ProjectActions,
    private dateService: DateService
  ) {
    this.routeSub$ = this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.store.dispatch(this.projectActions.fetchCategoryProjects(this.category));
    });

    this.categorySub$ = this.store.select(getAllProjects)
    .map((projects: Project[]) => {
      return projects.filter((project) => project.category_name === this.category);
    }).subscribe((projects) => {
      this.projects = projects;
      this.trendingProject = this.projects[0];
    });

  }

  ngOnInit() {
  }

  daysToGo(end_date) {
    return this.dateService.daysBetweenDates(new Date(), end_date);
  }

  ngOnDestroy() {
    this.categorySub$.unsubscribe();
    this.routeSub$.unsubscribe();
  }

}

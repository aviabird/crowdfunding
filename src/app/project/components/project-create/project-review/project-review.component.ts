import { Subscription } from 'rxjs/Subscription';
import { getDraftProject } from './../../../reducers/selectors';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { ProjectService } from './../../../services/project.service';
import { Project } from './../../../../core/models/project';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-review',
  templateUrl: './project-review.component.html',
  styleUrls: ['./project-review.component.scss']
})
export class ProjectReviewComponent implements OnInit {

  @Output() backToEditor: EventEmitter<number> = new EventEmitter<number>();
  private projectSub: Subscription = new Subscription();

  project: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.projectSub = this.store.select(getDraftProject).subscribe((project) => {
      this.project = project;
    });
  }

  ngOnInit() {
  }

  private fetchProject() {
  }

  onBackToEditor() {
    this.backToEditor.emit(1);
  }

  isStoryPresent() {
    let status = false;
    this.project.story.sections.forEach(section => {
      if (section.heading || section.description || section.image_url) {
        status = true;
      }
    });
    return status;
  }

  isRewardsPresent() {
    let status = false;
    this.project.rewards.forEach(reward => {
      if (reward.title || reward.description || reward.image_url || reward.amount) {
        status =  true;
      }
    });
    return status;
  }

  isFaqsPresent() {
    let status = false;
    this.project.faqs.forEach(faq => {
      if (faq.question || faq.answer) {
        status = true;
      }
    });
    return status;
  }

  isLinksPresent() {
    let status = false;
    this.project.links.forEach(link => {
      if (link.url) {
        status = true;
      }
    });
    return status;
  }

  onLaunch() {
    alert('Your Project is sent for review');
    this.router.navigate(['/']);
    localStorage.setItem('current_project_id', null);
  }

}

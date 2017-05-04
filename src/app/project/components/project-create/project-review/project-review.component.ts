import { ModalDirective } from 'ngx-bootstrap';
import { ProjectHttpService } from './../../../services/http/project-http.service';
import { getDraftProject, getSelectedProject } from './../../../reducers/project.selector';
import { ToastyService } from 'ng2-toasty';
import { Subscription } from 'rxjs/Subscription';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Project } from './../../../../core/models/project';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-review',
  templateUrl: './project-review.component.html',
  styleUrls: ['./project-review.component.scss']
})
export class ProjectReviewComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() backToEditor: EventEmitter<number> = new EventEmitter<number>();
  @Input() isEditing;
  @ViewChild('lgModal') lgModal: ModalDirective;
  // @ViewChild('story') story: ElementRef;

  private projectSub$: Subscription = new Subscription();

  errors: Array<string> = [];
  project: any;

  constructor(
    private projectHttpService: ProjectHttpService,
    private router: Router,
    private store: Store<AppState>,
    private toastyService: ToastyService
  ) {}

  ngOnInit() {
    if (this.isEditing) {
      this.projectSub$ = this.store.select(getSelectedProject).subscribe((project) => {
        this.project = project;
      });
    } else {
      this.projectSub$ = this.store.select(getDraftProject).subscribe((project) => {
        this.project = project;
      });
    }
  }

  ngAfterViewInit() {}

  private fetchProject() {
  }

  onBackToEditor() {
    this.backToEditor.emit(1);
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
    const isValid = this.checkIfProjectIsValid();
    this.hideModal();
    if (isValid) {
      this.projectHttpService.launchProject(this.project.id).subscribe((status) => {
        console.log('status');
        if (status) {
          this.router.navigate(['/']);
          this.toastyService.success('Your Project is Pending for Approval, We Will notify you once your project is approved');
        } else {
          this.toastyService.error('Something went wrong!');
        }
      });
    }
  }

  private checkIfProjectIsValid() {
    let status = true;
    this.errors = [];
    if (!this.project.title) {
      this.errors.push('Campaign Title is missing');
      status = false;
   }
    if (!this.project.pledged_amount) {
      this.errors.push('Campaign Goal Amount is Mising');
      status = false;
   }
    if (!this.project.duration) {
      this.errors.push('Campaign Duration is missig');
      status = false;
   }
    if (this.project.pictures.length === 0) {
      this.errors.push('Campaign Image is missing');
      status = false;
   }
    if (!this.project.story) {
      this.errors.push('Campaign Story is missing');
      status = false;
    }
    return status;
  }

  showModal() {
    this.lgModal.show();
  }

  hideModal() {
    this.lgModal.hide();
  }

  ngOnDestroy() {
    this.projectSub$.unsubscribe();
  }

}

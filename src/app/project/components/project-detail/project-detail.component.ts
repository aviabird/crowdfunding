import { DateService } from './../../../core/services/date.service';
import { ProjectHttpService } from './../../services/http/project-http.service';
import { ProjectActions } from './../../actions/project.actions';
import { ActivatedRoute } from '@angular/router';
import { getSelectedProject } from './../../reducers/project.selector';
import { CommentActions } from './../../actions/comment.actions';
import { Subscription } from 'rxjs/Subscription';
import { Project } from './../../../core/models/project';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Meta } from '@angular/platform-browser';

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
  safeEmbedUrl: SafeResourceUrl;
  carouselIndex: number;

  constructor(
    private store: Store<AppState>,
    private commentActions: CommentActions,
    private route: ActivatedRoute,
    private projectActions: ProjectActions,
    private projectHttpService: ProjectHttpService,
    private sanitizer: DomSanitizer,
    private zone: NgZone,
    private dateService: DateService,
    private metaService: Meta
    ) {
    this.routeSub$ = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(this.projectActions.fetchProject(id));
    });

    this.projectSub$ = this.store.select(getSelectedProject).subscribe((project) => {
      this.project = project;
      if (this.project) {
        // this.removeMetaTags();
        this.addMetaTags();
        this.zone.run(() => {
          this.getVideoEmbedUrl(this.project.video_url);
        });
      }
    });
  }

  ngOnInit() {}

  changeTab(number) {
    this.selectedTab = number;
  }

  showImage(index) {
    this.carouselIndex = index;
  }

  getVideoThumbnail(url) {
    const videoId = this.projectHttpService.getVideoId(url);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    return thumbnailUrl;
  }

  getVideoEmbedUrl(url) {
    if (!url) {
      return;
    }
    const videoId = this.projectHttpService.getVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
    this.safeEmbedUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  daysToGo() {
    this.dateService.daysBetweenDates(this.project.start_date, this.project.end_date);
  }

  ngOnDestroy() {
    this.store.dispatch(this.commentActions.clearComments());
    this.projectSub$.unsubscribe();
    this.routeSub$.unsubscribe();
  }

  removeMetaTags() {
    this.metaService.removeTag('title');
  }

  addMetaTags() {
    this.metaService.addTag({name: 'title',  content: this.project.title});
  }

}

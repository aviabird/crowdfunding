import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './services/project.service';
import { routes } from './project.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectTitleComponent } from './components/project-create/project-title/project-title.component';
import { ProjectRewardComponent } from './components/project-create/project-reward/project-reward.component';
import { ProjectStoryComponent } from './components/project-create/project-story/project-story.component';
import { ProjectFaqComponent } from './components/project-create/project-faq/project-faq.component';
import { ProjectLinkComponent } from './components/project-create/project-link/project-link.component';
import { ProjectReviewComponent } from './components/project-create/project-review/project-review.component';
import { ProjectProfileComponent } from './components/project-create/project-profile/project-profile.component';
import { ProjectEventComponent } from './components/project-create/project-event/project-event.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectCreateComponent,
    ProjectTitleComponent,
    ProjectRewardComponent,
    ProjectStoryComponent,
    ProjectFaqComponent,
    ProjectLinkComponent,
    ProjectReviewComponent,
    ProjectProfileComponent,
    ProjectEventComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }

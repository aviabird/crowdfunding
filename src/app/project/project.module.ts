import { KycFormService } from './services/forms/kyc-form.service';
import { SharedModule } from './../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ProjectActions } from './actions/project.actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import {ShareButtonsModule} from 'ngx-sharebuttons';

import { CommentEffects } from './effects/comment.effect';
import { ProjectEffects } from './effects/project.effects';

import { routes } from './project.routes';

import { LinkFormService } from './services/forms/link-form.service';
import { FaqFormService } from './services/forms/faq-form.service';
import { StoryFormService } from './services/forms/story-form.service';
import { RewardFormService } from './services/forms/reward-form.service';
import { ProjectFormService } from './services/forms/project-form.service';
import { CommentHttpService } from './services/http/comment-http.service';

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
import { CampaignComponent } from './components/project-detail/campaign/campaign.component';
import { UpdatesComponent } from './components/project-detail/updates/updates.component';
import { CommentsComponent } from './components/project-detail/comments/comments.component';
import { CommunityComponent } from './components/project-detail/community/community.component';
import { AlreadyPledgedComponent } from './components/project-detail/already-pledged/already-pledged.component';
import { PledgeMoreComponent } from './components/project-detail/pledge-more/pledge-more.component';
import { ProjectUserKycInfoComponent } from './components/project-create/project-user-kyc-info/project-user-kyc-info.component';
import { SocialShareComponent } from './components/project-detail/social-share/social-share.component';
import { ReportProjectComponent } from './components/project-detail/report-project/report-project.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CarouselModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ModalModule.forRoot(),
    ShareButtonsModule.forRoot(),
    EffectsModule.run(CommentEffects),
    SharedModule
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
    ProjectEventComponent,
    CampaignComponent,
    UpdatesComponent,
    CommentsComponent,
    CommunityComponent,
    AlreadyPledgedComponent,
    PledgeMoreComponent,
    ProjectUserKycInfoComponent,
    SocialShareComponent,
    ReportProjectComponent
  ],
  providers: [
    ProjectFormService,
    RewardFormService,
    StoryFormService,
    FaqFormService,
    LinkFormService,
    CommentHttpService,
    KycFormService
  ]
})
export class ProjectModule { }

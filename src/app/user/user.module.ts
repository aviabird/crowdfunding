import { UserActions } from './actions/user.actions';
import { UserService } from './services/user.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { routes } from './user.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { EasyPieChartModule } from 'ng2modules-easypiechart';

import { UserComponent } from './user.component';
import { NameContactsInfoComponent } from './components/name-contacts-info/name-contacts-info.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { BackedProjectsComponent } from './components/backed-projects/backed-projects.component';
import { ProjectBackersComponent } from './components/project-backers/project-backers.component';
import { UserCampaignsComponent } from './components/user-campaigns/user-campaigns.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { BasicInfoComponent } from './components/name-contacts-info/basic-info/basic-info.component';
import { PaymentInfoComponent } from './components/name-contacts-info/payment-info/payment-info.component';
import { EmailPasswordComponent } from './components/name-contacts-info/email-password/email-password.component';
import { SocialMediaLinksComponent } from './components/name-contacts-info/social-media-links/social-media-links.component';
import { ProfilePicComponent } from './components/name-contacts-info/profile-pic/profile-pic.component';
import { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
import { TruncatePipe } from './../core/pipes/truncate';


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    EffectsModule.run(UserEffects),
    SharedModule,
    EasyPieChartModule
  ],
  declarations: [
    UserComponent,
    NameContactsInfoComponent,
    QuickViewComponent,
    BackedProjectsComponent,
    ProjectBackersComponent,
    UserCampaignsComponent,
    ComingSoonComponent,
    BasicInfoComponent,
    PaymentInfoComponent,
    EmailPasswordComponent,
    SocialMediaLinksComponent,
    ProfilePicComponent,
    UserNotificationsComponent,
    TruncatePipe
  ],
  providers: [
    UserService,
    UserActions
  ]
})
export class UserModule { }

import { routes } from './user.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { NameContactsInfoComponent } from './components/name-contacts-info/name-contacts-info.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { BackedProjectsComponent } from './components/backed-projects/backed-projects.component';
import { ProjectBackersComponent } from './components/project-backers/project-backers.component';
import { MailComponent } from './components/mail/mail.component';
import { UserCampaignsComponent } from './components/user-campaigns/user-campaigns.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    UserComponent,
    NameContactsInfoComponent,
    QuickViewComponent,
    BackedProjectsComponent,
    ProjectBackersComponent,
    MailComponent,
    UserCampaignsComponent,
    ComingSoonComponent
  ],
  providers: []
})
export class UserModule { }

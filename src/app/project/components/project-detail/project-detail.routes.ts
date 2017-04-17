import { CommunityComponent } from './community/community.component';
import { CommentsComponent } from './comments/comments.component';
import { UpdatesComponent } from './updates/updates.component';
import { CampaignComponent } from './campaign/campaign.component';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'campaign' },
  { path: 'campaign', component: CampaignComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'community', component: CommunityComponent },
];

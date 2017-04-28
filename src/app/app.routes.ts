import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule' },
  { path: 'categories', loadChildren: './projects-listing/projects-listing.module#ProjectListingModule' },
  { path: 'users/:id', loadChildren: './user/user.module#UserModule' },
  { path: 'about-us', loadChildren: './static-pages/about-us/about-us.module#AboutUsModule' },
  { path: 'cookies', loadChildren: './static-pages/cookies/cookies.module#CookiesModule' },
  { path: 'faqs', loadChildren: './static-pages/faq/faq.module#FaqModule' },
  { path: 'jobs', loadChildren: './static-pages/job/job.module#JobModule' },
  { path: 'newsletter', loadChildren: './static-pages/newsletter/newsletter.module#NewsLetterModule' },
  { path: 'ngo', loadChildren: './static-pages/ngo/ngo.module#NgoModule' },
  { path: 'partners', loadChildren: './static-pages/partners/partners.module#PartnersModule' },
  { path: 'press', loadChildren: './static-pages/press/press.module#PressModule' },
  { path: 'pricing', loadChildren: './static-pages/pricing/pricing.module#PricingModule' },
  { path: 'privacy', loadChildren: './static-pages/privacy/privacy.module#PrivacyModule' },
  { path: 'rewards', loadChildren: './static-pages/rewards/rewards.module#RewardsModule' },
  { path: 'rulebook', loadChildren: './static-pages/rulebook/rulebook.module#RuleBookModule' },
  { path: 'statistics', loadChildren: './static-pages/statistics/statistics.module#StatisticsModule' },
  { path: 'support', loadChildren: './static-pages/support/support.module#SupportModule' },
  { path: 'terms', loadChildren: './static-pages/terms/terms.module#TermsModule' },
  { path: 'trust', loadChildren: './static-pages/trust/trust.module#TrustModule' },
  { path: 'tutorials', loadChildren: './static-pages/tutorials/tutorials.module#TutorialsModule' },
];

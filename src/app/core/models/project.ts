import { Base } from './base';
import { Story } from './story';
import { Event } from './event';
import { Link } from './link';
import { Faq } from './faq';
import { Reward } from './reward';

import { UUID } from 'angular2-uuid';

export class Project extends Base {
  id = UUID.UUID();
  title = '';
  category_id: string;
  image_url = '';
  video_url = '';
  goal_amount = '';
  funding_model = '';
  start_date = new Date();
  duration = '';
  rewards: Reward[] = [];
  faqs: Faq[] = [];
  links: Link[] = [];
  events: Event[] = [];
  story: Story = new Story;
}

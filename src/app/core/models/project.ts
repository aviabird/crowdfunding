import { Story } from './story';
import { Event } from './event';
import { Link } from './link';
import { Faq } from './faq';
import { Reward } from './reward';
export class Project {
  id: number;
  title: string;
  category_id: number;
  image_url: string;
  video_url: string;
  goal_amount: number;
  funding_model: string;
  start_date: Date;
  duration: number;
  rewards: Reward[];
  faqs: Faq[];
  links: Link[];
  events: Event[];
  story: Story;
}

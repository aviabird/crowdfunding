import { User } from './user';
import { Picture } from './picture';
import { Story } from './story';
import { Event } from './event';
import { Link } from './link';
import { Faq } from './faq';
import { Reward } from './reward';

export class Project {
  id = '';
  title = '';
  category_id: string;
  image_url = '';
  video_url = '';
  pledged_amount = '';
  funded_amount = '';
  funding_model = '';
  category_name = '';
  user_id: null;
  user: User;
  user_name = '';
  total_backers = '';
  percent_funded = '';
  start_date = new Date();
  end_date: Date;
  duration = '';
  currency: string;
  pictures: Picture[] = [new Picture];
  rewards: Reward[] = [new Reward];
  faqs: Faq[] = [new Faq];
  links: Link[] = [new Link];
  story: Story = new Story;
}

import { Picture } from './picture';
import { Base } from './base';

export class LiteProject {
  id: number;
  title: string;
  category_id: number;
  image_url: string;
  video_url: string;
  pledged_amount: number;
  funded_amount: number;
  funding_model: string;
  category_name: string;
  user_name: string;
  total_backers: number;
  percent_funded: number;
  start_date: Date;
  duration: number;
  currency: string;
  pictures: Picture[] = [new Picture];
}

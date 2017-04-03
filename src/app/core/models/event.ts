import { Base } from './base';

export class Event extends Base {
  title: string;
  country: string;
  date: Date;
  image_url: string;
  description: string;
  project_id: number;
}

import { Base } from './base';

export class Event extends Base {
  id = '';
  title = '';
  country = '';
  date = new Date();
  image_url = '';
  description = '';
  project_id: string;
}

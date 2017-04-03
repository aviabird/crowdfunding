import { Base } from './base';

export class Reward extends Base {
  id = '';
  title = '';
  description = '';
  image_url = '';
  amount = '';
  project_id: string;
}

import { Base } from './base';

export class Reward {
  id: number;
  title: string;
  description: string;
  image_url: string;
  amount: number;
  project_id: string;

  constructor() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.image_url = '';
    this.amount = null;
    this.project_id = '';
  }

}

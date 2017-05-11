export class Reward {
  id: number;
  title: string;
  description: string;
  delivery_date: Date;
  quantity: number;
  amount: number;
  currency: string;
  backers_count: number;
  project_id: number;

  constructor() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.delivery_date = new Date();
    this.quantity = null;
    this.amount = null;
    this.currency = 'USD';
    this.backers_count = null;
    this.project_id = null;
  }

}

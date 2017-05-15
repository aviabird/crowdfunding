import { ShippingLocation } from './shipping_location';

export class Reward {
  id: number;
  title: string;
  description: string;
  delivery_date: Date;
  quantity: number;
  amount: number;
  currency: string;
  backers_count: number;
  contain_shipping_locations: boolean;
  shipping_locations: ShippingLocation[];
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
    this.contain_shipping_locations = false;
    this.shipping_locations = [new ShippingLocation];
    this.project_id = null;
  }

}

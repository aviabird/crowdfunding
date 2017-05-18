import { Kyc } from './kyc';
import { Notification } from './notification';
import { Address } from './address';
import { LiteProject } from './lite-project';


export class User {
  id: '';
  name: string;
  image_url: string;
  email: string;
  secondary_email: string;
  phone_no: string;
  role_name: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  google_plus_url: string;
  total_backed_amount: number;
  is_stripe_connected: boolean;
  address: Address;
  projects: LiteProject[];
  project_backers: any;
  backed_projects: LiteProject[];
  notifications: Notification[];
  project_in_funding_state: LiteProject;
  kyc: Kyc;
}

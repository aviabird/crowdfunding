import { Address } from './address';
import { LiteProject } from './lite-project';


export class User {
  id: '';
  name: string;
  image_url: string;
  email: string;
  secondary_email: string;
  role_name: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  google_plus_url: string;
  address: Address;
  projects: LiteProject[];
  backed_projects: LiteProject[];
}

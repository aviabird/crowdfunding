import { SocialLink } from './social-link';
import { Address } from './address';
export class User {
  id: '';
  name: string;
  image_url: string;
  email: string;
  secondary_email: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  google_plus_url: string;
  address: Address = new Address;
}


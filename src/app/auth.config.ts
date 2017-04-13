import { environment } from './../environments/environment';
import { CustomConfig } from 'ng2-ui-auth';


const apiLink: string = environment.API_ENDPOINT; // "http://localhost:3000";
export const GOOGLE_CLIENT_ID = '676583033944-57tm364opa3o3deln53gkg3g46r4j3gh.apps.googleusercontent.com';
export const FACEBOOK_CLIENT_ID = '763807900464091';

export class MyAuthConfig extends CustomConfig {
  defaultHeaders = { 'Content-Type': 'application/json' };
  providers = {
    google: { clientId: GOOGLE_CLIENT_ID, url: `${apiLink}/api/v1/auth/google` },
    facebook: { clientId: FACEBOOK_CLIENT_ID, url: `${apiLink}/api/v1/auth/facebook` }
  };
}

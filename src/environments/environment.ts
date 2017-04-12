// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  token_auth_config: {
    apiBase: 'http://localhost:3000',
    oAuthBase:                'http://localhost:3000',
    oAuthPaths: {
      google:                 'auth/google_oauth2',
      facebook:               'auth/facebook'
    },
    oAuthCallbackPath:          'oauth_callback',
    oAuthWindowType:            'newWindow',
    oAuthWindowOptions:         null,
  },
  API_ENDPOINT: 'http://localhost:3000/',
  AppName: 'CrowdPouch'
};

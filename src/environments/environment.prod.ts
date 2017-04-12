export const environment = {
  production: true,
  token_auth_config: {
    apiBase: 'https://crowdpouch.herokuapp.com/',
    oAuthBase:                'https://crowdpouch.herokuapp.com/',
    oAuthPaths: {
      google:                 'auth/google_oauth2',
      facebook:               'auth/facebook'
    },
    oAuthCallbackPath:          'oauth_callback',
    oAuthWindowType:            'newWindow',
    oAuthWindowOptions:         null,
  },
  API_ENDPOINT: 'https://crowdpouch.herokuapp.com/',
  AppName: 'CrowdPouch'
};

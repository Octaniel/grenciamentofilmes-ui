const serverUrl: string = 'localhost';
// const serverUrl: string = '192.168.0.136';
const port: string = '8080';

export const environment: any = {
  production: false,
  AUTHORIZATION_KEY: 'YW5ndWxhcjpAbmd1bEByMA==',

  apiUrl: `http://${serverUrl}:${port}`,
  tokenWhitelistedDomains: [new RegExp(serverUrl)],
  tokenBlacklistedRoutes: [new RegExp('/oauth/token')],
};

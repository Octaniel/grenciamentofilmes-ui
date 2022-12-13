const serverUrl: string = 'efactura.st';

export const environment: any = {
  production: false,
  AUTHORIZATION_KEY: 'ZWZhdHVyYS11aTplZkB0dXJA',

  apiUrl: `https://${serverUrl}/app-efatura`,
  tokenWhitelistedDomains: [new RegExp(`${serverUrl}`)],
  tokenBlacklistedRoutes: [new RegExp('/oauth/token')],
};

// export const environment = {
//   production: true,
//   // apiUrl: 'http://197.159.166.11:4200/app-efatura',
//   // apiUrl: 'https://efactura.financas.gov.st/app-efatura',
//   apiUrl: 'https://efactura.st/app-efatura',

//   AUTHORIZATION_KEY: 'ZWZhdHVyYS11aTplZkB0dXJA',

//   /*tokenWhitelistedDomains: ['efactura.financas.gov.st'],
//   tokenBlacklistedRoutes: ['https://efactura.financas.gov.st/app-efatura/oauth/token'],*/

//   tokenWhitelistedDomains: ['efactura.st'],
//   tokenBlacklistedRoutes: ['http://efactura.st/app-efatura/oauth/token'],

//   oauth2Token: 'ZWZhdHVyYS11aTplZkB0dXJA',
// };

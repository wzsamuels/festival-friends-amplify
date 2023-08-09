import { isPlatform } from "@ionic/react";

export const domain = "dev-cgd3qsg8.us.auth0.com";
export const clientId = "n4G7fMzSjc77z7VA13mhftrg08gNp0yy";
const appId = "app.eventfriends.www";

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:5173';
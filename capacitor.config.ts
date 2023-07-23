import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.eventfriends.www",
  appName: "Event Friends",
  webDir: "dist",
  bundledWebRuntime: false,
  "ios": {
    "contentInset": "always"
  },
  "server": {
    cleartext: true,
    "androidScheme": "eventfriends",
  }
};

export default config;

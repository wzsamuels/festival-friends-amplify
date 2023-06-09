import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.eventfriends.www",
  appName: "Event Friends",
  webDir: "dist",
  bundledWebRuntime: false,
  "ios": {
    "contentInset": "always"
  }
};

export default config;

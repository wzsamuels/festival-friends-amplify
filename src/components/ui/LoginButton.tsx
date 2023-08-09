import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";
import Button from "../common/Button/Button";
import React from "react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const login = async () => {
    await loginWithRedirect({
      async openUrl(url) {
        await Browser.open({
          url,
          windowName: "_self"
        });
      }
    });
  };

  return <Button onClick={login}>Log in</Button>;
};

export default LoginButton;

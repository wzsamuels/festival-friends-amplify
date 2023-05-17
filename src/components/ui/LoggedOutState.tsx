import React from "react";
import Button from "../common/Button/Button";
import { Link } from "react-router-dom";

const LoggedOutState: React.FC<{ onSignInClick?: () => void }> = ({
  onSignInClick,
}) => (
  <>
    <div className="m-4 text-xl ">
      You must be logged in to access this feature.
    </div>
    <Link to="/account">
      <Button onClick={onSignInClick}>Sign In</Button>
    </Link>
  </>
);

export default LoggedOutState;

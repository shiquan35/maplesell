import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./loginButton.css";

const LoginButton = (event) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="loginButton"
      onClick={() => loginWithRedirect()}
    ></button>
  );
};

export default LoginButton;

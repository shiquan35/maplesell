import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./logoutButton.css";

const LogoutButton = (event) => {
  const { logout } = useAuth0();

  return (
    <button
      className="logoutButton"
      onClick={() => logout({ returnTo: window.location.origin })}
    ></button>
  );
};

export default LogoutButton;

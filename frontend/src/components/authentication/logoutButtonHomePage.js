import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./logoutButton.css";

const LogoutButtonInHomePage = (event) => {
  const { logout } = useAuth0();

  return (
    <button
      className="logoutButtonInHomePage"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButtonInHomePage;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-hmluigxe.us.auth0.com"
      clientId="6r5zyVayFEe8R0sCMN2NfPoCLTxWOctq"
      redirectUri={window.location.origin}
      audience="https://dev-hmluigxe.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <Router />
    </Auth0Provider>
  </BrowserRouter>
);

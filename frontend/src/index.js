import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
const CLIENTID = process.env.REACT_APP_CLIENT_ID;
const AUDIENCE = process.env.REACT_APP_AUDIENCE;
const SCOPE = process.env.REACT_APP_SCOPE;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      redirectUri={window.location.origin}
      audience={AUDIENCE}
      scope={SCOPE}
    >
      <Router />
    </Auth0Provider>
  </BrowserRouter>
);

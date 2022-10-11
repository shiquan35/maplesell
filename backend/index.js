const express = require("express");

const PORT = 3000;
const app = express();

const { auth } = require("express-oauth2-jwt-bearer");
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: "https://maplesell/api",
  issuerBaseURL: `https://dev-hmluigxe.us.auth0.com`,
});

app.get("/", checkJwt, (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

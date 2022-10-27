import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";

import mushroom from "../img/mushroom.gif";
import mapleaudio from "../audio/mapleaudio.mp3";
import "./loginPage.css";

function LoginPage() {
  return (
    <div className="header">
      <iframe
        src={mapleaudio}
        allow="autoplay"
        id="loginAudio"
        hidden
        title="loginAudio Sound"
      ></iframe>
      <img src={mushroom} className="mushroom" alt="loading..." />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default LoginPage;

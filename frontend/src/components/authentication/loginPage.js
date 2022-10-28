import React, { useState } from "react";
import LoginButton from "./loginButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import mushroom from "../img/mushroom.gif";
import mapleaudio from "../audio/mapleaudio.mp3";
import "./loginPage.css";

function LoginPage() {
  const [src, setSrc] = useState("");

  const handlePlayMusic = () => {
    setSrc(mapleaudio);
  };

  const handleMuteMusic = () => {
    setSrc("");
  };
  return (
    <div className="header">
      <VolumeUpIcon onClick={handlePlayMusic} className="playButton" />
      <VolumeOffIcon className="stopButton" onClick={handleMuteMusic} />
      <iframe
        src={src}
        allow="autoplay"
        id="loginAudio"
        hidden
        title="loginAudio Sound"
      ></iframe>
      <img src={mushroom} className="mushroom" alt="loading..." />
      <LoginButton />
    </div>
  );
}

export default LoginPage;

import "./App.css";
import LoginPage from "./components/authentication/loginPage";
import Auth from "./components/auth";
import mapleaudio from "./components/audio/mapleaudio.mp3";

function App() {
  return (
    <div>
      <iframe
        src={mapleaudio}
        allow="autoplay"
        id="loginAudio"
        hidden
        title="loginAudio Sound"
      ></iframe>
      <LoginPage />
      <Auth />
    </div>
  );
}

export default App;

import "./App.css";
import LoginPage from "./components/authentication/loginPage";
import Auth from "./components/auth";

function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
      {/* <audio src={mapleaudio} controls className="music">
          <embed src={mapleaudio} autostart="true" width="300" height="90" />
        </audio> */}
      {/* </header> */}
      <LoginPage />
      <Auth />
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/home";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;

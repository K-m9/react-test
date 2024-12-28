import logo from './logo.svg';
import './App.css';
import CookieConsent from "react-cookie-consent";


function App() {
  return (
    <div classname="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CookieConsent
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{
          textShadow: "2px 2px black",
        }}
        buttonStyle={{
          color: "white",
          fontWeight: "bolder",
          textShadow: "2px 2px black",
        }}
      >
        This website uses cookies to enhance the user experience.

      </CookieConsent>

    </div>
  );

}

export default App;

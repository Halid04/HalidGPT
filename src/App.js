import "./App.css";
import lightModeIcon from "./images/lightModeIcon.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">HalidGPT</h1>
        <div className="iconWrapper">
          <img
            className="darkLightMode"
            src={lightModeIcon}
            alt="icon theme"
          ></img>
        </div>
      </nav>
      <div className="chatInterface"></div>
    </div>
  );
}

export default App;

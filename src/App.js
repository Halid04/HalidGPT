import "./App.css";
import { useState } from "react";
import { Navbar } from "./component/Navbar";
import { ChatInterface } from "./component/ChatInterface";

function App() {
  const [themeIcon, setThemeIcon] = useState(false);
  return (
    <div className="App">
      <Navbar themeIcon={themeIcon} setThemeIcon={setThemeIcon} />
      <ChatInterface themeIcon={themeIcon} />
    </div>
  );
}

export default App;

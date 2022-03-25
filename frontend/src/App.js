import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Articles from "./components/Articles.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Main  />} />
            <Route exact path="/home" element={<Home  />} />
            <Route exact path="/articles" element={<Articles  />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

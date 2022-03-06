import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Articles from "./components/Articles.js";
import About from "./components/About.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/articles" element={<Articles  />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

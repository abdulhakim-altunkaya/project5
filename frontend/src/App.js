import {Route, Routes, Switch, BrowserRouter as Router} from "react-router-dom";
import Articles from "./components/Articles.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>

            <Route exact path="/"><Main /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/articles"><Articles /></Route>
            <Route exact path="/about"><About /></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

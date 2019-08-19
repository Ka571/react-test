import React from "react";

import "./App.css";
import { BrowserRouter as Router, NavLink, HashRouter } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <HashRouter className="App">
      <div>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </div>
      <Main />
    </HashRouter>
  );
}

export default App;

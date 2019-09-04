import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";

import Home from "./Home";
import Board from "./Board/Board";

import "./App.scss";

import Stores from "./Stores";
import Write from "./Board/Write";
import Login from "./User/Login";

const App = () => (
  <Provider stores={Stores}>
    <BrowserRouter>
      <header className="app-header">
        <ul className="menu-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>

      <section className="app-body">
        <Route path="/" exact component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/write" component={Write} />
        <Route path="/login" component={Login} />
      </section>
    </BrowserRouter>
  </Provider>
);

export default App;

import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Components/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

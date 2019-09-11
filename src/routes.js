import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Projects from "./views/Projects/Projects";
export default (
  <Switch>
    <Route component={Home} exact path="/"></Route>
    <Route component={About} path="/about"></Route>
    <Route component={Contact} path="/contact"></Route>
    <Route component={Projects} path="/projects"></Route>
  </Switch>
);

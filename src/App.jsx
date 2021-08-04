import React from "react";
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import "./assets/scss/main.scss"
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/blog" component={BlogPage}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;

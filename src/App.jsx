import React from "react";
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import "./assets/scss/main.scss"
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;

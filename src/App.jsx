import React from "react";
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import "./assets/scss/main.scss"
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <HomePage/>
    </>
  );
}

export default App;

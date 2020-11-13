import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import PasswordPage from "./components/PasswordPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage}></Route>
        <Route path="/loggedin" component={SecondPage}></Route>
        <Route path="/passwordreset" component={PasswordPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;

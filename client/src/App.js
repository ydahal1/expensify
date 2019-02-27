import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Dashboard from "./components/dashboard";
import AddExpese from "./components/addExpense";
import Help from "./components/help";
import Notfound from "./components/404";
import Test from "./components/test";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/create" component={AddExpese} />
            <Route path="/help" component={Help} />
            <Route path="/test" component={Test} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

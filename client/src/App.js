import React, { Component } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import SignupComponent from "./components/Signin/SignupComponent";
import TradeComponent from "./components/Trade/TradeComponent";

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Trade finance</h1>
            <h3>Everything is fair in trade and settlement</h3>
          </header>

          <Switch>
            <Redirect exact from="/" to="/signin" />
            <Route path="/signin" component={SignupComponent} />
            <Route path="/trade" component={TradeComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

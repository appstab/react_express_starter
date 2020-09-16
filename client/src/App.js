import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Customer from './pages/customer';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          {/* <ErrorHandler> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/customer/:customerId/" component={Customer} />
              {/* <Route component={Page404} /> */}
            </Switch>
          {/* </ErrorHandler> */}
        </BrowserRouter>
    );
  }
}

export default App;

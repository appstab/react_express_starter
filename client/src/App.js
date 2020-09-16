import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import DogPage from './pages/dogPage';
import BreedsPage from './pages/breedsPage';
import ErrorHandler from './components/errorHandler';
import Page404 from './pages/page404';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <ErrorHandler> 
            <Switch>
              <Route exact path="/" component={BreedsPage} />
              <Route exact path="/breed/:breedName/" component={DogPage} />
              <Route component={Page404} />
            </Switch>
          </ErrorHandler>
        </BrowserRouter>
    );
  }
}

export default App;

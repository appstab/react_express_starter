import React from 'react';
import logo from '../logo.svg';
import Customers from '../components/customers';

const Home = () => {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Customers />
      </div>
}

export default Home;

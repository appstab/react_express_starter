import React from 'react';
import logo from '../logo.svg';
import Breeds from '../components/breeds';

const BreedsPage = () => {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Doggies</h1>
        </header>
        <Breeds />
      </div>
}

export default BreedsPage;

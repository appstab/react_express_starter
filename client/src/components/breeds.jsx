import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './breeds.css';

class Breeds extends Component {
  constructor() {
    super();
    this.state = {
      breeds: []
    };
  }

  componentDidMount() {
    fetch('/api/breeds')
      .then(res => res.json())
      .then(breeds => this.setState({breeds}, () => console.log('Breeds fetched...', breeds)));
  }

  render() {
    return (
      <div>
        <h2>Breeds</h2>
        <ul>
        {this.state.breeds.map(breed => 
          <li key={breed.id}><Link to={`breed/${breed.name}`}>{breed.name}</Link></li>
        )}
        </ul>
      </div>
    );
  }
}

export default Breeds;

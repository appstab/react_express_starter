import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const DogPage = () => {

    const { breedName } = useParams();

    const [imageSrc, setimageSrc] = React.useState();

    React.useEffect(() => {
      fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then(data => data.json())
        .then(data => setimageSrc(data.message));
    }, [breedName]);
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Doggies</h1>
        </header>
        <div>
          <Link to="/">back</Link>
        </div>
        {!imageSrc && <p>Loading...</p>}
        {imageSrc && <img alt={`A nice ${breedName}`} src={imageSrc} height={200} />}
      </div>
    );  
}

export default DogPage;

import React from 'react';
import { useParams } from 'react-router';

const Customer = () => {

    const { customerId } = useParams();

    return <div className="App">
        <h1>Customer selected: {customerId}</h1>
      </div>
}

export default Customer;

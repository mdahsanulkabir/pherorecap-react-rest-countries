import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Country name: {props.name}</h2>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;
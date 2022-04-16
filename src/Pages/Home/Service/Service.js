import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, cost } = service;
    return (
        <div className='service'>
            <img className='service-images' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {cost}</p>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;
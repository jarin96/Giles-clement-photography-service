import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, cost } = service;
    return (
        <div className='service'>
            <img className='service-images' src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${cost}</h5>
            <p><small>{description}</small></p>
            <button className='btn btn-dark'>Book: {name}</button>
        </div>
    );
};

export default Service;
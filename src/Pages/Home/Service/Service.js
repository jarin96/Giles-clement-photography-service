import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, cost } = service;
    return (
        <div className='service'>
            <img className='service-images' src={img} alt="" />
            <h4 className='mt-3'>{name}</h4>
            <h5>Price: &#128178;{cost} </h5>
            <p><small>{description}</small></p>
            <Link to='/checkout'>
                <button className='btn btn-dark rounded-bottom p-2 border border-light'>Book: {name}</button>
            </Link>
        </div>
    );
};

export default Service;
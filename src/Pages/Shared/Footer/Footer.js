import React from 'react';
import './Footer.css';

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <footer className='py-5 bg-dark footer'>
            <div className='container-fluid'>
                <p className='mt-5 text-center text-white'>
                    <small>copyright &copy; {getYear()} </small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
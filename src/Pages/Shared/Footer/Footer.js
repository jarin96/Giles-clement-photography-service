import React from 'react';

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <footer className='py-5 bg-dark'>
            <div className='container-fluid'>
                <p className='m-0 text-center text-white'>
                    <small>copyright &copy; {getYear()} </small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
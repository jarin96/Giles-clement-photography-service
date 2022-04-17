import React from 'react';
import Banner from '../Banner/Banner';
import Galleries from '../Galleries/Galleries';
import Profile from '../Profile/Profile';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Galleries></Galleries>
            <Profile></Profile>
        </div>
    );
};

export default Home;
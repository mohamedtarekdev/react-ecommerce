import React from 'react';
import MainNavbar from '../components/MainNavbar';
import Slider from '../components/Slider';
import Categories from '../sections/Categories';

const Home = () => {
    return (
        <div>
            <MainNavbar />
            <Slider />
            <Categories />
        </div>
    );
};

export default Home;

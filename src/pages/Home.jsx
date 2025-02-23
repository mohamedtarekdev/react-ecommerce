import React from 'react';
import MainNavbar from '../components/MainNavbar';
import Slider from '../components/Slider';
import CategoriesList from '../sections/CategoriesList';
import ProductsList from '../sections/ProductsList';

const Home = () => {
    return (
        <div>
            <MainNavbar />
            <Slider />
            <CategoriesList title="التصنيفات" btnValue="المزيد" />
            <ProductsList title="الأكثر مبيعًا" btnValue="المزيد" />
        </div>
    );
};

export default Home;

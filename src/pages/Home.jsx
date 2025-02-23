import React from 'react';
import MainNavbar from '../components/MainNavbar';
import Slider from '../components/Slider';
import CategoriesList from '../sections/CategoriesList';
import ProductsList from '../sections/ProductsList';
import Ad from '../components/Ad';
import BrandsList from '../sections/BrandsList';
import Footer from '../sections/Footer';

const Home = () => {
    return (
        <div>
            <MainNavbar />
            <Slider />
            <CategoriesList title="التصنيفات" btnValue="المزيد" />
            <ProductsList title="الأكثر مبيعًا" btnValue="المزيد" />
            <Ad />
            <ProductsList title="أحدث الأزياء" btnValue="المزيد" />
            <BrandsList title="أشهر الماركات" btnValue="المزيد" />
            <Footer />
        </div>
    );
};

export default Home;

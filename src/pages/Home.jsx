import React from 'react';
import Slider from '../components/Slider';
import CategoriesList from '../sections/CategoriesList';
import ProductsList from '../sections/ProductsList';
import Ad from '../components/Ad';
import BrandsList from '../sections/BrandsList';

const Home = () => {
    return (
        <div>
            <Slider />
            <CategoriesList />
            <ProductsList title="Trendy Products" tag="this month" />
            <Ad />
            <ProductsList
                title="أحدث الأزياء"
                btnValue="المزيد"
                path="/filtered-products"
            />
            <BrandsList
                title="أشهر الماركات"
                btnValue="المزيد"
                path="/brands"
            />
        </div>
    );
};

export default Home;

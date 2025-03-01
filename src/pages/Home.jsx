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
            <CategoriesList
                title="التصنيفات"
                btnValue="المزيد"
                path="/all-categories"
            />
            <ProductsList
                title="الأكثر مبيعًا"
                btnValue="المزيد"
                path="/filtered-products"
            />
            <Ad />
            <ProductsList
                title="أحدث الأزياء"
                btnValue="المزيد"
                path="/filtered-products"
            />
            <BrandsList
                title="أشهر الماركات"
                btnValue="المزيد"
                path="/all-brands"
            />
        </div>
    );
};

export default Home;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import CategoryCard from '../components/CategoryCard';

import category1 from '../assets/imgs/grocery/icon/category-01.png';
import category2 from '../assets/imgs/grocery/icon/category-02.png';
import category3 from '../assets/imgs/grocery/icon/category-03.png';
import category4 from '../assets/imgs/grocery/icon/category-04.png';
import category5 from '../assets/imgs/grocery/icon/category-05.png';
import category6 from '../assets/imgs/grocery/icon/category-06.png';

const CategoriesContainer = () => {
    const categories = [
        {
            id: 1,
            title: 'Vegetable',
            image: category1,
            total: 16,
        },
        {
            id: 2,
            title: 'Milk & dairy',
            image: category2,
            total: 12,
        },
        {
            id: 3,
            title: 'Coffee & Tea',
            image: category3,
            total: 5,
        },
        {
            id: 4,
            title: 'Drinks',
            image: category4,
            total: 20,
        },
        {
            id: 5,
            title: 'Meat',
            image: category5,
            total: 8,
        },
        {
            id: 6,
            title: 'Fresh Fruits',
            image: category6,
            total: 6,
        },
    ];

    return (
        <>
            <div className="discount-main p-relative">
                <div className="discount-slider-navigation grocery__navigation">
                    <button
                        type="button"
                        className="discount-slider-button-prev"
                    >
                        <i className="fa-regular fa-angle-left"></i>
                    </button>
                    <button
                        type="button"
                        className="discount-slider-button-next"
                    >
                        <i className="fa-regular fa-angle-right"></i>
                    </button>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.discount-slider-button-prev',
                        nextEl: '.discount-slider-button-next',
                    }}
                    spaceBetween={20}
                    slidesPerView={5}
                    loop={true}
                    className="f-category-active"
                >
                    {categories.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <CategoryCard category={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default CategoriesContainer;

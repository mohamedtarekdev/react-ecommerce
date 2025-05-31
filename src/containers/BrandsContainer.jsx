import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import BrandCard from '../components/BrandCard';

import brand1 from '../assets/imgs/grocery/brand/brand-01.png';
import brand2 from '../assets/imgs/grocery/brand/brand-02.png';
import brand3 from '../assets/imgs/grocery/brand/brand-03.png';
import brand4 from '../assets/imgs/grocery/brand/brand-04.png';
import brand5 from '../assets/imgs/grocery/brand/brand-05.png';

const BrandsContainer = () => {
    const banners = [
        { id: 1, image: brand1 },
        { id: 2, image: brand2 },
        { id: 3, image: brand3 },
        { id: 4, image: brand4 },
        { id: 5, image: brand5 },
    ];

    return (
        <div className="discount-main p-relative">
            <div className="discount-slider-navigation grocery__navigation">
                <button type="button" className="discount-slider-button-prev">
                    <i className="fa-regular fa-angle-left"></i>
                </button>
                <button type="button" className="discount-slider-button-next">
                    <i className="fa-regular fa-angle-right"></i>
                </button>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.discount-slider-button-next',
                    prevEl: '.discount-slider-button-prev',
                }}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                className="furuniture-active"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <BrandCard banner={banner} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandsContainer;

import SliderBanner from '../components/SliderBanner';

import banner1 from '../assets/imgs/grocery/banner/product1.png';
import banner2 from '../assets/imgs/grocery/banner/product2.png';
import banner3 from '../assets/imgs/grocery/banner/product3.png';

import background from '../assets/imgs/grocery/banner/bg.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    const banners = [
        {
            id: 1,
            image: banner1,
            desc: 'Buy Delicious produce Enjoy Free Shipping',
        },
        {
            id: 2,
            image: banner2,
            desc: 'Buy Delicious produce Enjoy Free Shipping',
        },
        {
            id: 3,
            image: banner3,
            desc: 'Buy Delicious produce Enjoy Free Shipping',
        },
    ];

    return (
        <main>
            <section
                className="banner-4 p-relative grocery-banner-area fix bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="swiper banner-active-grocery">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ el: '.banner-dot', clickable: true }}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            className="banner-active-grocery"
                        >
                            {banners.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <SliderBanner banner={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Slider;

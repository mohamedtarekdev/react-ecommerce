import descountTag from '../assets/imgs/grocery/banner/discount-tag.png';
const SliderBanner = ({ banner }) => {
    return (
        <div className="swiper-slide">
            <div className="banner-item-4 d-flex align-items-center">
                <div className="container">
                    <div className="row g-5 align-self-center">
                        <div className="col-xxl-6 col-lg-6">
                            <div className="banner-content-4 grocery__content">
                                <span>100% Organic Product</span>
                                <h2 className="banner-title-4">
                                    {banner.desc}
                                </h2>
                                <div className="banner-btn-wrapper grocery__btn-group mt-50">
                                    <a
                                        className="solid-btn"
                                        href="grocery-grocery-product.html"
                                    >
                                        Buy Now
                                        <span>
                                            <i className="fa-regular fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6">
                            <div className="banner-thumb-wrapper-4 p-relative">
                                <div className="banner-thumb-4">
                                    <img src={banner.image} alt="image" />
                                </div>
                                <div className="banner-discout-tag">
                                    <img src={descountTag} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;

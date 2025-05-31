const BrandCard = ({ banner }) => {
    return (
        <div className="swiper-slide">
            <div className="product-item grocery__product">
                <div className="product-thumb theme-bg-2">
                    <a href="grocery-details.html">
                        <img src={banner.image} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;

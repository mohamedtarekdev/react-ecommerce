import React from 'react';

const MiniProductCard = ({ product }) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="grocery-seller__item">
                <div className="fs-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="fs-content">
                    <h5>
                        <a
                            href="grocery-details.html"
                            className="text-capitalize"
                        >
                            {product.title}
                        </a>
                    </h5>
                    <span>USD {product.price}</span>
                    <div className="fs-rating">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniProductCard;

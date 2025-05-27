const Ad = ({ image, tag, title, whiteText }) => {
    return (
        <a
            href="grocery-details.html"
            className="grocery-off__item h-100 bg-image d-block"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <span className="fo-discount">{tag}</span>
            <h3
                className={
                    whiteText ? 'text-capitalize text-white' : 'text-capitalize'
                }
                style={{ whiteSpace: 'pre-line' }}
            >
                {title}
            </h3>
            <div className="solid-btn mt-30">
                Buy Now
                <span>
                    <i className="fa-regular fa-angle-right"></i>
                </span>
            </div>
        </a>
    );
};

export default Ad;

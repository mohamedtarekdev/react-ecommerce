const CategoryCard = ({ category }) => {
    return (
        <div className="swiper-slide">
            <div className="grocery-category__item">
                <div className="icon">
                    <img src={category.image} alt="icon" />
                </div>
                <h6>
                    <a href="grocery-details.html">{category.title}</a>
                </h6>
                <span>{category.total} items</span>
            </div>
        </div>
    );
};

export default CategoryCard;

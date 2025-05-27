import Slider from '../sections/Slider';
import CategoriesList from '../sections/CategoriesList';
import ProductsList from '../sections/ProductsList';
import Ads from '../sections/Ads';
import BrandsList from '../sections/BrandsList';

const Home = () => {
    return (
        <div>
            <Slider />
            <CategoriesList />
            <ProductsList title="Trendy Products" tag="this month" />
            <Ads />
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

import React from 'react';
import CategoryCard from '../components/CategoryCard';

import clothes from '../assets/images/clothes.png';
import makeup from '../assets/images/makeup.png';
import pan from '../assets/images/pan.png';
import washing_machine from '../assets/images/washing-machine.png';
import laptop from '../assets/images/laptop.png';
import sale from '../assets/images/sale.png';

const CategoriesContainer = () => {
    return (
        <>
            <CategoryCard
                title="اجهرة منزلية"
                categoryImage={clothes}
                background="#D6FDD9"
            />
            <CategoryCard
                title="مستحضرات تجميل"
                categoryImage={makeup}
                background="#FFCCCC"
            />
            <CategoryCard
                title="ادوات منزلية"
                categoryImage={pan}
                background="#FDEDD7"
            />
            <CategoryCard
                title="اجهرة منزلية"
                categoryImage={washing_machine}
                background="#D6FDFF"
            />
            <CategoryCard
                title="اجهرة الكترونية"
                categoryImage={laptop}
                background="#D6E6FD"
            />
            <CategoryCard
                title="تخفيضات"
                categoryImage={sale}
                background="#FBD6D6"
            />
        </>
    );
};

export default CategoriesContainer;

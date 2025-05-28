import MiniProductCard from '../components/MiniProductCard';

import product1 from '../assets/imgs/grocery/product/fs-01.png';
import product2 from '../assets/imgs/grocery/product/fs-02.png';
import product3 from '../assets/imgs/grocery/product/fs-03.png';
import product4 from '../assets/imgs/grocery/product/fs-04.png';
import product5 from '../assets/imgs/grocery/product/fs-05.png';
import product6 from '../assets/imgs/grocery/product/fs-06.png';
import product7 from '../assets/imgs/grocery/product/fs-07.png';
import product8 from '../assets/imgs/grocery/product/fs-08.png';
import product9 from '../assets/imgs/grocery/product/fs-09.png';

const MiniProductsContainer = () => {
    const prodcuts = [
        {
            id: 1,
            image: product1,
            price: '150.00',
            title: 'Organic Avocado',
            tag: '10% Off',
        },
        {
            id: 2,
            image: product2,
            price: '190.00',
            title: 'Cheddar Fries',
        },
        {
            id: 3,
            image: product3,
            price: '300.00',
            title: 'Broccoli Organic',
            tag: '15% Off',
        },
        {
            id: 4,
            image: product4,
            price: '129.00',
            title: 'Broccoli Farms',
        },
        {
            id: 5,
            image: product5,
            price: '150.00',
            title: 'Fresh Orange',
            tag: '10% Off',
        },
        {
            id: 6,
            image: product6,
            price: '150.00',
            title: 'Organic Avocado',
        },
        {
            id: 7,
            image: product7,
            price: '80.00',
            title: 'Fresh Orange',
            tag: 'NEW',
        },
        {
            id: 8,
            image: product8,
            price: '49.00',
            title: 'Red Apple',
        },
        {
            id: 9,
            image: product9,
            price: '150.00',
            title: 'Fresh Orange',
            tag: '10% Off',
        },
    ];

    return (
        <>
            {prodcuts.map((product) => (
                <MiniProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default MiniProductsContainer;

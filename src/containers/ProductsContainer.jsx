import React from 'react';

import ProductCard from '../components/ProductCard';

import product1 from '../assets/imgs/grocery/product/product1.png';
import product2 from '../assets/imgs/grocery/product/product2.png';
import product3 from '../assets/imgs/grocery/product/product3.png';
import product4 from '../assets/imgs/grocery/product/product4.png';
import product5 from '../assets/imgs/grocery/product/product5.png';
import product6 from '../assets/imgs/grocery/product/product6.png';
import product7 from '../assets/imgs/grocery/product/product7.png';
import product8 from '../assets/imgs/grocery/product/product8.png';
import { Row } from 'react-bootstrap';

const ProductsContainer = () => {
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
    ];

    return (
        <>
            {prodcuts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductsContainer;

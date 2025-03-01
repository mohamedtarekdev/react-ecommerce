import React from 'react';
import ProductCard from '../components/ProductCard';

import product from '../assets/images/product.png';

const ProductsContainer = () => {
    return (
        <>
            <ProductCard productImage={product} />
            <ProductCard productImage={product} />
            <ProductCard productImage={product} />
            <ProductCard productImage={product} />
        </>
    );
};

export default ProductsContainer;

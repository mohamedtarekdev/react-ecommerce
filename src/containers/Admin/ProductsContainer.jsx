import React from 'react';
import AdminProductCard from '../../components/Admin/ProductCard';
import product from '../../assets/images/product.png';

const ProductsContainer = () => {
    return (
        <>
            <AdminProductCard productImage={product} />
            <AdminProductCard productImage={product} />
            <AdminProductCard productImage={product} />
        </>
    );
};

export default ProductsContainer;

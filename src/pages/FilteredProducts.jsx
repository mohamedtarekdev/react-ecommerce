import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryNavbar from '../components/CategoryNavbar';
import FilteredProductsHeader from '../components/FilteredProductsHeader';

const FilteredProducts = () => {
    return (
        <div className="filtered-products" style={{ minHeight: '80vh' }}>
            <CategoryNavbar />
            <Container>
                <FilteredProductsHeader title="500 منتج..." />
            </Container>
        </div>
    );
};

export default FilteredProducts;

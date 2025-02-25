import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

import product from '../assets/images/product.png';

const ProductsList = ({ title, btnValue }) => {
    return (
        <Container>
            <SectionTitle title={title} btnValue={btnValue} />
            <Row>
                <ProductCard productImage={product} />
                <ProductCard productImage={product} />
                <ProductCard productImage={product} />
                <ProductCard productImage={product} />
            </Row>
        </Container>
    );
};

export default ProductsList;

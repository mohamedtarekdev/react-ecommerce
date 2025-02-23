import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const ProductsList = ({ title, btnValue }) => {
    return (
        <Container>
            <SectionTitle title={title} btnValue={btnValue} />
            <Row>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </Container>
    );
};

export default ProductsList;

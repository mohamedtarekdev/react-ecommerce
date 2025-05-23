import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import ProductsContainer from '../containers/ProductsContainer';

const ProductsList = ({ title, btnValue, path }) => {
    return (
        <Container>
            <SectionTitle title={title} btnValue={btnValue} path={path} />
            <Row className="g-4">
                <ProductsContainer />
            </Row>
        </Container>
    );
};

export default ProductsList;

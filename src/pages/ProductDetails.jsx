import React from 'react';
import CategoryNavbar from '../components/CategoryNavbar';

import mobile1 from '../assets/images/mobile1.png';
import mobile2 from '../assets/images/mobile2.png';
import mobile3 from '../assets/images/mobile3.png';
import { Col, Container, Row } from 'react-bootstrap';
import ProductGallery from '../components/ProductGallery';

const ProductDetails = () => {
    const images = [
        {
            original: mobile1,
        },
        {
            original: mobile2,
        },
        {
            original: mobile3,
        },
    ];
    return (
        <div style={{ minHeight: '80vh' }}>
            <CategoryNavbar />
            <Container>
                <Row className="pt-3">
                    <Col lg={4}>
                        <ProductGallery images={images} />
                    </Col>
                    <Col lg={8}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;

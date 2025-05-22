import React from 'react';
import { Container, Row } from 'react-bootstrap';

import BrandCard from '../components/BrandCard';

import brand1 from '../assets/images/brand1.png';
import brand2 from '../assets/images/brand2.png';
import brand3 from '../assets/images/brand3.png';
import Pagination from '../components/Pagination';

const Brands = () => {
    return (
        <Container
            className="page d-flex flex-column justify-content-between"
            style={{ minHeight: '80vh' }}
        >
            <div className="page-data">
                <div className="title mt-4">كل الماركات</div>
                <Row>
                    <BrandCard brandImage={brand1} />
                    <BrandCard brandImage={brand2} />
                    <BrandCard brandImage={brand3} />
                    <BrandCard brandImage={brand1} />
                    <BrandCard brandImage={brand2} />
                    <BrandCard brandImage={brand3} />
                    <BrandCard brandImage={brand1} />
                    <BrandCard brandImage={brand2} />
                    <BrandCard brandImage={brand3} />
                    <BrandCard brandImage={brand1} />
                    <BrandCard brandImage={brand2} />
                    <BrandCard brandImage={brand3} />
                </Row>
            </div>
            <Pagination />
        </Container>
    );
};

export default Brands;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import BrandCard from '../components/BrandCard';

import brand1 from '../assets/images/brand1.png';
import brand2 from '../assets/images/brand2.png';
import brand3 from '../assets/images/brand3.png';

const BrandsList = ({ title, btnValue }) => {
    return (
        <Container>
            <SectionTitle title={title} btnValue={btnValue} />
            <Row>
                <BrandCard brandImage={brand1} />
                <BrandCard brandImage={brand2} />
                <BrandCard brandImage={brand3} />
                <BrandCard brandImage={brand1} />
                <BrandCard brandImage={brand2} />
                <BrandCard brandImage={brand3} />
            </Row>
        </Container>
    );
};

export default BrandsList;

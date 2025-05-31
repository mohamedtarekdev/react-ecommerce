import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import BrandCard from '../components/BrandCard';

import brand1 from '../assets/images/brand1.png';
import brand2 from '../assets/images/brand2.png';
import brand3 from '../assets/images/brand3.png';

const BrandsList = ({ title, tag }) => {
    return (
        <section class="discount-area p-relative section-space">
            <Container>
                <SectionTitle title={title} tag={tag} />
                <Row>
                    <BrandCard brandImage={brand1} />
                    <BrandCard brandImage={brand2} />
                    <BrandCard brandImage={brand3} />
                    <BrandCard brandImage={brand1} />
                    <BrandCard brandImage={brand2} />
                    <BrandCard brandImage={brand3} />
                </Row>
            </Container>
        </section>
    );
};

export default BrandsList;

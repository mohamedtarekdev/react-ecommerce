import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import laptops from '../assets/images/laptops.png';

const Ads = () => {
    return (
        <Container>
            <Row className="ad my-3 mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <span>خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب</span>
                </Col>
                <Col sm="6">
                    <img className="ads-img" src={laptops} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Ads;

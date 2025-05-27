import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Ad from '../components/Ad';

import image1 from '../assets/imgs/grocery/product/off-01.png';
import image2 from '../assets/imgs/grocery/product/off-02.png';

const Ads = () => {
    return (
        <section className="grocery-off">
            <Container>
                <Row className="g-4">
                    <Col xs={12} lg={5}>
                        <Ad
                            image={image1}
                            tag="30% Off"
                            title="Fresh Vegetables"
                        />
                    </Col>
                    <Col xs={12} lg={7}>
                        <Ad
                            image={image2}
                            tag="Limited Offer"
                            title={`Don't miss 25% off
                                    on all fruits`}
                            whiteText={true}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Ads;

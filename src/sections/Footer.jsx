import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';

const Footer = () => {
    return (
        <div className="footer mt-3 pt-2" style={{ maxHeight: '50px' }}>
            <Container>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-center ">
                        <div className="footer-data">الشروط والاحكام</div>
                        <div className="footer-data mx-2">سياسة الخصوصية</div>
                        <div className="footer-data mx-2">اتصل بنا</div>
                    </Col>
                    <Col
                        sm="6"
                        className="d-flex justify-content-end align-items-center"
                    >
                        <div className="d-flex mx-2">
                            <p>+20 123 456 7890</p>
                            <img
                                src={phone}
                                width="20px"
                                height="20px"
                                alt="phone"
                            />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img
                                src={facebook}
                                width="20px"
                                height="20px"
                                alt="facebook"
                            />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img
                                src={instagram}
                                width="20px"
                                height="20px"
                                alt="instagram"
                            />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img
                                src={twitter}
                                width="20px"
                                height="20px"
                                alt="twitter"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;

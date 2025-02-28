import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CategoryNavbar = () => {
    return (
        <div className="category-navbar">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start py-2 flex-wrap">
                        <a href="#" className="item">
                            الكل
                        </a>
                        <a href="#" className="item">
                            اجهرة منزلية
                        </a>
                        <a href="#" className="item">
                            مستحضرات تجميل
                        </a>
                        <a href="#" className="item">
                            ادوات منزلية
                        </a>
                        <a href="#" className="item">
                            اجهرة منزلية
                        </a>
                        <a href="#" className="item">
                            اجهرة الكترونية
                        </a>
                        <a href="#" className="item">
                            تخفيضات
                        </a>
                        <a href="#" className="item">
                            المزيد
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryNavbar;

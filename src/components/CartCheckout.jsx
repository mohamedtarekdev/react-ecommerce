import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const CartCheckout = () => {
    return (
        <Col className="my-4 d-flex justify-content-center">
            <Row className="d-flex justify-content-center cart py-3">
                <Col xs="12" className="d-flex flex-column">
                    <div className="d-flex">
                        <input
                            className="copon-input d-inline text-center"
                            placeholder="كود الخصم"
                        />
                        <button className="copon-btn d-inline">تطبيق</button>
                    </div>
                    <div className="product-price d-inline w-100 my-3 border">
                        34,000 جنية
                    </div>
                    <Link
                        to="/order/payment-methoud"
                        style={{ textDecoration: 'none' }}
                        className="product-cart-add d-inline"
                    >
                        <button className="product-cart-add w-100 px-2">
                            {' '}
                            اتمام الشراء
                        </button>
                    </Link>
                </Col>
            </Row>
        </Col>
    );
};

export default CartCheckout;

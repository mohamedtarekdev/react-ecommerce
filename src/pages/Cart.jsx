import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import CartCheckout from '../components/CartCheckout';

const Cart = () => {
    return (
        <Container
            className="page d-flex flex-column justify-content-between"
            style={{ minHeight: '80vh' }}
        >
            <div className="page-data">
                <div className="title mt-4">عربة التسوق</div>
                <Row>
                    <Col xs="12" md="8">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </Col>
                    <Col xs="12" md="4">
                        <CartCheckout />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Cart;

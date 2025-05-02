import React from 'react';
import PaymentMethod from '../components/PaymentMethod';
import { Container } from 'react-bootstrap';

const Checkout = () => {
    return (
        <Container
            className="page d-flex flex-column justify-content-between"
            style={{ minHeight: '80vh' }}
        >
            <div className="page-data">
                <div className="title mt-4">اختار طريقة الدفع</div>
                <PaymentMethod />
            </div>
        </Container>
    );
};

export default Checkout;

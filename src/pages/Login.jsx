import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {
    return (
        <Container style={{ minHeight: '80vh' }}>
            <Row className="py-5 d-flex justify-content-center">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">تسجيل الدخول</label>
                    <input
                        placeholder="الايميل..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        placeholder="كلمه السر..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-3">
                        تسجيل الدخول
                    </button>
                    <label className="mx-auto my-4">
                        ليس لديك حساب ؟{' '}
                        <a href="/" className="text-danger">
                            اضغط هنا
                        </a>
                    </label>
                    <label className="mx-auto">هل نسيت كلمه السر</label>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

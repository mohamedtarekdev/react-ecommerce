import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="login" style={{ minHeight: '80vh' }}>
            <Row className="py-5 d-flex justify-content-center">
                <Col sm="12" className="d-flex flex-column ">
                    <span className="mx-auto title">تسجيل الدخول</span>
                    <input
                        placeholder="البريد الالكتروني..."
                        type="email"
                        className="my-3 text-center mx-auto"
                    />
                    <input
                        placeholder="كلمة السر..."
                        type="password"
                        className="text-center mx-auto"
                    />
                    <button className="mx-auto mt-3">تسجيل الدخول</button>
                    <div className="d-flex justify-content-center my-4">
                        <span>ليس لديك حساب ؟</span>
                        <a href="/register" className="text-danger mx-1">
                            اضغط هنا
                        </a>
                    </div>
                    <a href="#" className="mx-auto">
                        هل نسيت كلمة السر
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

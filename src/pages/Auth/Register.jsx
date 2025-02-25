import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Register = () => {
    return (
        <Container className="auth">
            <Row className="py-5 d-flex justify-content-center">
                <Col sm="12" className="d-flex flex-column">
                    <span className="mx-auto title">تسجيل حساب جديد</span>
                    <input
                        placeholder="اسم المستخدم..."
                        type="text"
                        className="mt-3 text-center mx-auto"
                    />
                    <input
                        placeholder="البريد الالكتروني..."
                        type="email"
                        className="my-3 text-center mx-auto"
                    />
                    <input
                        placeholder="الهاتف..."
                        type="phone"
                        className="text-center mx-auto"
                    />
                    <input
                        placeholder="كلمه السر..."
                        type="password"
                        className="text-center mt-3 mx-auto"
                    />
                    <input
                        placeholder="تاكيد كلمه السر..."
                        type="password"
                        className="text-center mt-3 mx-auto"
                    />
                    <button className="mx-auto mt-3">تسجيل الحساب</button>
                    <div className="d-flex justify-content-center my-4">
                        <span>لديك حساب بالفعل؟</span>
                        <Link to={'/login'} className="text-danger mx-1">
                            اضغط هنا
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

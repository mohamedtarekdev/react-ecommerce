import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import mobile from '../assets/images/mobile1.png';
import deleteIcon from '../assets/images/delete.png';

const CartItem = () => {
    return (
        <Col xs="12" className="cart my-4 d-flex px-4 py-3">
            <img
                height="196px"
                className="ms-4"
                src={mobile}
                alt="product image"
            />
            <div className="w-100">
                <Row className="justify-content-between">
                    <Col
                        sm="12"
                        className=" d-flex flex-row justify-content-between"
                    >
                        <div className="d-inline pt-2 cat-text">
                            {'اجهزة الكترونية'}
                        </div>
                        <div
                            className="d-flex pt-2 "
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={deleteIcon}
                                alt=""
                                width="20px"
                                height="24px"
                            />
                            <div className="cat-text d-inline me-2">ازالة</div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col
                        sm="12"
                        className=" d-flex flex-row justify-content-start"
                    >
                        <div className="d-inline pt-2 cat-title">
                            {'ايفون 14 برو ماكس'}
                        </div>
                        <div className="d-inline pt-2 cat-rate me-2">
                            {'4.5'}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1">
                        <div className="cat-text d-inline">الماركة :</div>
                        <div className="barnd-text d-inline mx-1">
                            {'Apple'}{' '}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1 d-flex">
                        <div
                            className="color ms-2 border"
                            style={{ backgroundColor: `black` }}
                        ></div>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col
                        sm="12"
                        className=" d-flex flex-row justify-content-between"
                    >
                        <div className="d-inline pt-2 d-flex">
                            <div className="cat-text mt-2  d-inline">
                                الكميه
                            </div>
                            <input
                                value={1}
                                className="mx-2 text-center"
                                type="number"
                                style={{ width: '60px', height: '40px' }}
                            />
                            <Button className="btn btn-dark">تطبيق</Button>
                        </div>
                        <div className="d-inline pt-2 barnd-text">
                            {'35,000'} جنيه
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default CartItem;

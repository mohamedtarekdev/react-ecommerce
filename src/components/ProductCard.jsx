import React from 'react';
import { Card, Col } from 'react-bootstrap';

import product from '../assets/images/product.png';
import favImg from '../assets/images/fav-off.png';
import rate from '../assets/images/rate.png';

const ProductCard = () => {
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="my-4 d-flex">
            <Card
                className="my-2"
                style={{
                    width: '100%',
                    height: '345px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 2px 2px 0 rgba(151,151,151,0.5)',
                }}
            >
                <Card.Img
                    style={{ height: '228px', width: '100%' }}
                    src={product}
                />
                <div className="d-flex justify-content-end mx-2">
                    <img
                        src={favImg}
                        alt=""
                        className="text-center"
                        style={{
                            height: '24px',
                            width: '26px',
                            cursor: 'pointer',
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">منتج</div>
                    </Card.Title>
                    <Card.Text>
                        <span className="d-flex justify-content-between">
                            <span className="d-flex">
                                <img
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <span className="card-rate mx-2">3.5</span>
                            </span>
                            <span className="d-flex">
                                <span className="card-price">500</span>
                                <span className="card-currency mx-1">جنيه</span>
                            </span>
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;

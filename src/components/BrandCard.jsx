import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BrandCard = ({ brandImage }) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-2 d-flex justify-content-center"
        >
            <Card
                className="my-1"
                style={{
                    width: '100%',
                    height: '150px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#FFFFFF',
                }}
            >
                <Card.Img
                    style={{ width: '100%', height: '151px' }}
                    src={brandImage}
                />
            </Card>
        </Col>
    );
};

export default BrandCard;

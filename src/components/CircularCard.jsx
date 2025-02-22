import React from 'react';
import { Col } from 'react-bootstrap';

const CircularCard = ({ title, image, background }) => {
    return (
        <Col
            xs={6}
            sm={6}
            md={4}
            lg={2}
            className="my-4 d-flex justify-content-around"
        >
            <div className="all-cards">
                <div
                    className="circular-card d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: background }}
                >
                    <img src={image} alt="..." />
                </div>
                <div className="circular-card-title my-2">{title}</div>
            </div>
        </Col>
    );
};

export default CircularCard;

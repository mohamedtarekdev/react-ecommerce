import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ProductDescription = () => {
    const availableColors = ['red', 'black', 'white'];
    return (
        <div>
            <Row className="mt-2">
                <div className="cat-text">التصنيف : اجهزة الكترونية</div>
            </Row>
            <Row>
                <Col md="8">
                    <div className="cat-title d-inline">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <div className="cat-rate d-inline mx-3">3.5</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-4">
                    <div className="cat-text d-inline">الماركة : </div>
                    <div className="barnd-text d-inline mx-1">آبل</div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-1 d-flex">
                    {availableColors
                        ? availableColors.map((color, index) => {
                              return (
                                  <div
                                      key={index}
                                      onClick={() => colorClick(index, color)}
                                      className="color ms-2 border"
                                      style={{
                                          backgroundColor: color,
                                      }}
                                  ></div>
                              );
                          })
                        : null}
                </Col>
            </Row>

            <Row className="mt-4">
                <div className="cat-text">المواصفات :</div>
            </Row>
            <Row className="mt-2">
                <Col md="10">
                    <div className="product-description d-inline">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eveniet exercitationem deleniti delectus quod
                        consequatur sapiente necessitatibus, saepe repellendus
                        quasi dignissimos, vitae ut aliquam neque natus cumque
                        ea architecto eos eaque! Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Dolor dicta natus commodi
                        libero corporis officiis quibusdam! Non atque vitae sint
                        dolorum veritatis modi dicta perferendis nemo! A optio
                        tempora nulla!
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <div className="product-price d-inline px-3 py-3 border">
                        500 جنية
                    </div>
                    <div className="product-cart-add px-3 py-3 d-inline mx-3">
                        اضف للعربة
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductDescription;

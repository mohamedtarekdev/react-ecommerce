import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CustomerDetails = () => {
    return (
        <div className="justify-content-center mt-4 user-data p-2">
            <Col xs="12" className=" d-flex">
                <div className="admin-content-text py-2 fw-bold">
                    تفاصيل العميل
                </div>
            </Col>
            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: '#555550',
                        fontFamily: 'Almarai',
                        fontSize: '16px',
                    }}
                >
                    الاسم:
                </div>

                <div
                    style={{
                        color: '#979797',
                        fontFamily: 'Almarai',
                        fontSize: '16px',
                    }}
                    className="mx-2"
                >
                    احمد عبدالله
                </div>
            </Col>

            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: '#555550',
                        fontFamily: 'Almarai',
                        fontSize: '16px',
                    }}
                >
                    رقم الهاتف:
                </div>

                <div
                    style={{
                        color: '#979797',
                        fontFamily: 'Almarai',
                        fontSize: '16px',
                        direction: 'ltr',
                    }}
                    className="mx-2"
                >
                    +20 123 456 7890
                </div>
            </Col>
            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: '#555550',
                        fontFamily: 'Almarai',
                        fontSize: '16px',
                    }}
                >
                    الايميل:
                </div>

                <div
                    style={{
                        color: '#979797',
                        fontFamily: 'Almarai',
                        fontSize: '16px',
                    }}
                    className="mx-2"
                >
                    ahmed@gmail.com
                </div>
            </Col>
            <div className="p-2 border-top border-bottom text-center pt-2 my-2">
                المجموع 70,000 جنيه
            </div>
            <div className="d-flex mt-2 justify-content-center">
                <select
                    name="languages"
                    id="lang"
                    className="select input-form-area mt-1  text-center px-2 w-50"
                >
                    <option value="val">حالة الطلب</option>
                    <option value="val2">قيد التنفيذ</option>
                    <option value="val2">تم الانتهاء</option>
                    <option value="val2">الغاء</option>
                </select>
                <button className="btn-a px-3 d-inline mx-2 ">حفظ </button>
            </div>
        </div>
    );
};

export default CustomerDetails;

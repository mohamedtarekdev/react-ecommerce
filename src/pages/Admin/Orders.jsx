import React from 'react';
import { Row } from 'react-bootstrap';

import AdminOrdersContainer from '../../containers/Admin/OrdersContainer';

import Pagination from '../../components/Pagination';

const Orders = () => {
    return (
        <>
            <div className="page-data">
                <div className="title mt-4">إدارة الطلبات</div>
                <div className="mb-3">
                    <AdminOrdersContainer />
                </div>
            </div>
            <Pagination />
        </>
    );
};

export default Orders;

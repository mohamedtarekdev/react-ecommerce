import React from 'react';

import AdminOrderCard from '../../components/Admin/OrderCard';
import CustomerDetails from '../../components/Admin/CustomerDetails';

const OrderDetails = () => {
    return (
        <>
            <div className="page-data">
                <div className="title mt-4">إدارة الطلب رقم #3250</div>
                <div className="mb-3">
                    <AdminOrderCard />
                    <AdminOrderCard />
                    <CustomerDetails />
                </div>
            </div>
        </>
    );
};

export default OrderDetails;

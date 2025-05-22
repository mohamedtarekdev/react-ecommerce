import React from 'react';
import { Row } from 'react-bootstrap';
import AdminProductsContainer from '../../containers/Admin/ProductsContainer';
import Pagination from '../../components/Pagination';

const Products = () => {
    return (
        <>
            <div className="page-data">
                <div className="title mt-4">إدارة المنتجات</div>
                <Row className="mb-2">
                    <AdminProductsContainer />
                    <AdminProductsContainer />
                </Row>
            </div>
            <Pagination />
        </>
    );
};

export default Products;

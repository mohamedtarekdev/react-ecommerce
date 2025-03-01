import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryNavbar from '../components/CategoryNavbar';
import FilteredProductsHeader from '../components/FilteredProductsHeader';
import SidebarFilters from '../components/SidebarFilters';
import ProductsContainer from '../containers/ProductsContainer';
import Pagination from '../components/Pagination';

const FilteredProducts = () => {
    return (
        <div className="filtered-products" style={{ minHeight: '80vh' }}>
            <CategoryNavbar />
            <Container className="d-flex flex-column justify-content-between">
                <div className="page-data">
                    <FilteredProductsHeader title="500 نتجة بحث" />
                    <Row className="d-flex flex-row">
                        <Col md={2}>
                            <SidebarFilters />
                        </Col>
                        <Col md={10}>
                            <Row>
                                <ProductsContainer />
                                <ProductsContainer />
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Pagination />
            </Container>
        </div>
    );
};

export default FilteredProducts;

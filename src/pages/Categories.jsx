import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Pagination from '../components/Pagination';
import CategoriesContainer from '../containers/CategoriesContainer';

const Categories = () => {
    return (
        <Container
            className="page d-flex flex-column justify-content-between"
            style={{ minHeight: '80vh' }}
        >
            <div className="page-data">
                <div className="title mt-4">كل التصنيفات</div>
                <Row className="my-2 d-flex justify-content-between">
                    <CategoriesContainer />
                    <CategoriesContainer />
                </Row>
            </div>
            <Pagination />
        </Container>
    );
};

export default Categories;

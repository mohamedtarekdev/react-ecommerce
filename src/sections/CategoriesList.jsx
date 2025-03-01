import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';

import CategoriesContainer from '../containers/CategoriesContainer';

const CategoriesList = ({ title, btnValue, path }) => {
    return (
        <Container>
            <SectionTitle title={title} btnValue={btnValue} path={path} />
            <Row>
                <CategoriesContainer />
            </Row>
        </Container>
    );
};

export default CategoriesList;

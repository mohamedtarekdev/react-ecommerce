import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import ProductsContainer from '../containers/ProductsContainer';

const ProductsList = ({ title, tag }) => {
    return (
        <Container>
            <SectionTitle title={title} tag={tag} />
            <Row className="g-4">
                <ProductsContainer />
            </Row>
        </Container>
    );
};

export default ProductsList;

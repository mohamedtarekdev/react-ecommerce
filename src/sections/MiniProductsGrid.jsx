import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import MiniProductsContainer from '../containers/MiniProductsContainer';

const MiniProductsGrid = ({ title, tag }) => {
    return (
        <section className="grocery-seller pt-100 pb-100">
            <Container>
                <SectionTitle title={title} tag={tag} />
                <Row className="g-4">
                    <MiniProductsContainer />
                </Row>
            </Container>
        </section>
    );
};

export default MiniProductsGrid;

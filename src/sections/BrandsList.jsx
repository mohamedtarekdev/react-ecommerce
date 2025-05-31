import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import BrandsContainer from '../containers/BrandsContainer';

const BrandsList = ({ title, tag }) => {
    return (
        <section className="discount-area p-relative section-space">
            <Container>
                <SectionTitle title={title} tag={tag} />
                <Row>
                    <BrandsContainer />
                </Row>
            </Container>
        </section>
    );
};

export default BrandsList;

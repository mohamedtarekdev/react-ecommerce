import { Container } from 'react-bootstrap';
import CategoriesContainer from '../containers/CategoriesContainer';

const CategoriesList = ({ title, btnValue, path }) => {
    return (
        <section className="grocery-category pt-100">
            <Container>
                <CategoriesContainer />
            </Container>
        </section>
    );
};

export default CategoriesList;

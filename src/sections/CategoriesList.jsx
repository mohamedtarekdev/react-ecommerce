import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';

import clothes from '../assets/images/clothes.png';
import makeup from '../assets/images/makeup.png';
import pan from '../assets/images/pan.png';
import washing_machine from '../assets/images/washing-machine.png';
import laptop from '../assets/images/laptop.png';
import sale from '../assets/images/sale.png';

const Categories = ({ title, btnValue }) => {
    return (
        <Container>
            <SectionTitle title={title} btnValue={btnValue} />
            <Row>
                <CategoryCard
                    title="اجهرة منزلية"
                    image={clothes}
                    background="#D6FDD9"
                />
                <CategoryCard
                    title="مستحضرات تجميل"
                    image={makeup}
                    background="#FFCCCC"
                />
                <CategoryCard
                    title="ادوات منزلية"
                    image={pan}
                    background="#FDEDD7"
                />
                <CategoryCard
                    title="اجهرة منزلية"
                    image={washing_machine}
                    background="#D6FDFF"
                />
                <CategoryCard
                    title="اجهرة الكترونية"
                    image={laptop}
                    background="#D6E6FD"
                />
                <CategoryCard
                    title="تخفيضات"
                    image={sale}
                    background="#FBD6D6"
                />
            </Row>
        </Container>
    );
};

export default Categories;

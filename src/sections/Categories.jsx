import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import CircularCard from '../components/CircularCard';

import clothes from '../assets/images/clothes.png';
import makeup from '../assets/images/makeup.png';
import pan from '../assets/images/pan.png';
import washing_machine from '../assets/images/washing-machine.png';
import laptop from '../assets/images/laptop.png';
import sale from '../assets/images/sale.png';

const Categories = () => {
    return (
        <Container>
            <SectionTitle title="التصنيفات" btnValue="المزيد" />
            <Row>
                <CircularCard
                    title="اجهرة منزلية"
                    image={clothes}
                    background="#D6FDD9"
                />
                <CircularCard
                    title="مستحضرات تجميل"
                    image={makeup}
                    background="#FFCCCC"
                />
                <CircularCard
                    title="ادوات منزلية"
                    image={pan}
                    background="#FDEDD7"
                />
                <CircularCard
                    title="اجهرة منزلية"
                    image={washing_machine}
                    background="#D6FDFF"
                />
                <CircularCard
                    title="اجهرة الكترونية"
                    image={laptop}
                    background="#D6E6FD"
                />
                <CircularCard
                    title="تخفيضات"
                    image={sale}
                    background="#FBD6D6"
                />
            </Row>
        </Container>
    );
};

export default Categories;

import React from 'react';
import { Container, Row } from 'react-bootstrap';

import CategoryCard from '../components/CategoryCard';

import clothes from '../assets/images/clothes.png';
import makeup from '../assets/images/makeup.png';
import pan from '../assets/images/pan.png';
import washing_machine from '../assets/images/washing-machine.png';
import laptop from '../assets/images/laptop.png';
import sale from '../assets/images/sale.png';
import Pagination from '../components/Pagination';

const AllCategories = () => {
    return (
        <Container
            className="page d-flex flex-column justify-content-between"
            style={{ minHeight: '80vh' }}
        >
            <div className="page-data">
                <div className="title mt-4">كل التصنيفات</div>
                <Row className="my-2 d-flex justify-content-between">
                    <CategoryCard
                        title="اجهرة منزلية"
                        categoryImage={clothes}
                        background="#D6FDD9"
                    />
                    <CategoryCard
                        title="مستحضرات تجميل"
                        categoryImage={makeup}
                        background="#FFCCCC"
                    />
                    <CategoryCard
                        title="ادوات منزلية"
                        categoryImage={pan}
                        background="#FDEDD7"
                    />
                    <CategoryCard
                        title="اجهرة منزلية"
                        categoryImage={washing_machine}
                        background="#D6FDFF"
                    />
                    <CategoryCard
                        title="اجهرة الكترونية"
                        categoryImage={laptop}
                        background="#D6E6FD"
                    />
                    <CategoryCard
                        title="تخفيضات"
                        categoryImage={sale}
                        background="#FBD6D6"
                    />
                    <CategoryCard
                        title="اجهرة منزلية"
                        categoryImage={clothes}
                        background="#D6FDD9"
                    />
                    <CategoryCard
                        title="مستحضرات تجميل"
                        categoryImage={makeup}
                        background="#FFCCCC"
                    />
                    <CategoryCard
                        title="ادوات منزلية"
                        categoryImage={pan}
                        background="#FDEDD7"
                    />
                    <CategoryCard
                        title="اجهرة منزلية"
                        categoryImage={washing_machine}
                        background="#D6FDFF"
                    />
                    <CategoryCard
                        title="اجهرة الكترونية"
                        categoryImage={laptop}
                        background="#D6E6FD"
                    />
                    <CategoryCard
                        title="تخفيضات"
                        categoryImage={sale}
                        background="#FBD6D6"
                    />
                </Row>
            </div>
            <Pagination />
        </Container>
    );
};

export default AllCategories;

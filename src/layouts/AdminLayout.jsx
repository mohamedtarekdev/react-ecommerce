import { Col, Container, Row } from 'react-bootstrap';
import MainNavbar from '../components/MainNavbar';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router';
import Sidebar from '../components/Admin/Sidebar';

export default function AdminLayout() {
    return (
        <>
            <MainNavbar />
            <Container
                className="page d-flex flex-column justify-content-between"
                style={{ minHeight: '80vh' }}
            >
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

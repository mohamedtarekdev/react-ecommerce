import { Container, Nav, Navbar, FormControl } from 'react-bootstrap';
import { Link } from 'react-router';

import logo from '../assets/images/logo.png';
import login from '../assets/images/login.png';
import cart from '../assets/images/cart.png';

function MainNavbar() {
    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img src={logo} className="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to={'/login'}
                            className="nav-text d-flex mt-3 justify-content-center"
                        >
                            <img
                                src={login}
                                className="login-img"
                                alt="login"
                            />
                            <p style={{ color: 'white' }}>دخول</p>
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to={'/cart'}
                            className="nav-text position-relative d-flex mt-3 justify-content-center"
                            style={{ color: 'white' }}
                        >
                            <img src={cart} className="login-img" alt="cart" />
                            <p style={{ color: 'white' }}>العربة</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;

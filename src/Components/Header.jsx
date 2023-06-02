import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';


const Layout = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Demo From Rolcar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto ">
                        <Nav.Link href="/">Actualizar</Nav.Link>
                     </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Layout
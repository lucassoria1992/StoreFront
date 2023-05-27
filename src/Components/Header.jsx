import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import FormularioCarga from './Formulario';


const Layout = () => {



    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Demo From Rolcar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/list">Productos</Nav.Link> 
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                        <FormularioCarga /> 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Layout
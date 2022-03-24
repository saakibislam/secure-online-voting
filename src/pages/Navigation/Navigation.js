import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Political Parties"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item as={Link} to="/registered">Registered Parties</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/parties">All Political Parties</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Registration"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item as={Link} to="#action/3.1">Registration Process</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action/3.2">Registration Form</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/news">News</Nav.Link>
                    <Nav.Link as={Link} to="/photos">Photo Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>

                </Nav>


            </Container>
        </Navbar>
    );
};

export default Navigation;